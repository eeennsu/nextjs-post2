import { API_URL, headers } from '../config';

export const getUserProfile = async (_id: string) => {
    
    const res = await fetch(`${API_URL}/user/profile/${_id}`, {
        headers
    });

    const data = await res.json();

    if (data.error) {
        return null;
    }

    return data;
}

export const getUserArticles = async (_id: string) => {
    
    const res = await fetch(`${API_URL}/user/articles/${_id}`, {
        headers
    });

    const data = await res.json();

    if (data.error) {
        return null;
    }

    return data as { result: Article[], totalPages: number };
}