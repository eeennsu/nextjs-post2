import type { UploadApiResponse } from "cloudinary";
import { uploadImage } from "./upload"
import { API_URL } from "./config";

export const craeteNewArticle = async (formData: Form, createdBy: string) => {
    const imageUrl = await uploadImage(formData.image) as UploadApiResponse;

    if (!imageUrl.url) {
        return false;
    }

    const res = await fetch(`${API_URL}/article/new`, {
        method: 'POST',
        body: JSON.stringify({ formData, createdBy })
    });

    const { newArticle } = await res.json();

    return newArticle;
}