import type { UploadApiResponse } from "cloudinary";
import { uploadImage } from "./upload"
import { API_URL } from "./config";

export const craeteNewArticle = async (formData: Form, createdBy: string) => {
    const { result: imageUrl } = await uploadImage(formData.image) as UploadApiResponse;

    if (!imageUrl.url) {
        return false;
    }

    const res = await fetch(`${API_URL}/article/new`, {
        method: 'POST',
        body: JSON.stringify({ formData, createdBy })
    });

    const { result } = await res.json();

    return result as Article;
}

export const getArticles = async (curPage: number) => {    
    const url = new URL(`${API_URL}/article`);
    url.searchParams.append('curPage', curPage.toString());

    const res = await fetch(url, { 
        cache: 'no-cache'   
    });

    const data = await res.json();

    if (data.error) {
        return null;
    }

    return data;
}