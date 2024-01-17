'use server';

import { API_URL } from '../config';

export const getUserProfile = async (_id: string) => {
    
    const res = await fetch(`${API_URL}/user/profile/${_id}`);

    const data = await res.json();

    if (data.error) {
        return null;
    }

    return data;
}

export const getUserArticles = async (_id: string) => {
    
    const res = await fetch(`${API_URL}/user/articles/${_id}`);

    const data = await res.json();

    if (data.error) {
        return null;
    }

    return data as { result: Article[], totalPages: number };
}