'use server';

import { API_URL } from '../config';

export const getMyArticle = async (_id: string) => {
    
    const res = await fetch(`${API_URL}/user/articles/${_id}`, {
        cache: 'no-cache'
    });

    const data = await res.json();

    if (data.error) {
        return null;
    }

    return data as { result: Article[], totalPages: number };
}