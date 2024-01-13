import { API_URL } from "./config";

export const uploadImage = async (imgPath: string) => {
    try {
        const res = await fetch(`${API_URL}/article/upload`, {
            method: 'POST',
            body: JSON.stringify({ imgPath }),
        });

        return res.json();
    } catch (error) {
        throw error;
    }
}