import type { UploadApiResponse } from "cloudinary";
import { uploadImage } from "../upload"
import { API_URL, headers } from "../config";

export const craeteNewArticle = async (formData: Form, creatorId: string) => {
    const { result: imageData } = await uploadImage(formData.image) as UploadApiResponse;

    if (!imageData.url) {
        return false;
    }

    const res = await fetch(`${API_URL}/article/new`, {
        headers,
        method: 'POST',
        body: JSON.stringify(
            { 
                formData: {
                    ...formData,
                    image: imageData.url
                }, 
                createdBy: creatorId 
            }
        ),
    });

    const { result } = await res.json();

    return result as Article;
}

export const getArticles = async (curPage: number, category: Category | null) => {    
    const url = new URL(`${API_URL}/article`);
    url.searchParams.append('curPage', curPage.toString());

    if (category) {
        url.searchParams.append('category', category);
    }
 
    const res = await fetch(url.toString(), {
        headers,
        cache: 'no-store'
    });

    const data = await res.json();

    if (data.error) {
        return null;
    }

    return data as { result: Article[], totalPages: number };
}

export const getOneArticle = async (_id: string) => {
    const res = await fetch(`${API_URL}/article/${_id}`, {
        headers
    });

    const data = await res.json();

    if (data.error) {
        return null;
    }

    return data as { result: Article };
}

export const deleteMyArticle = async (_id: string) => {
    const res = await fetch(`${API_URL}/article/${_id}`, {
        headers,
        method: 'DELETE',
    });

    const data = await res.json();

    return data;
}

export const updateMyArticle = async (articleId: string, updatedForm: Form, creatorId: string) => {
    const { result: imageData } = await uploadImage(updatedForm.image) as UploadApiResponse;

    if (!imageData.url) {
        return false;
    }

    const res = await fetch(`${API_URL}/article/${articleId}`, {
        headers,
        method: 'PATCH',
        body: JSON.stringify(
            { 
                formData: {
                    ...updatedForm,
                    image: imageData.url
                }, 
                createdBy: creatorId 
            }
        )
    });

    const data = await res.json();

    return data;
}