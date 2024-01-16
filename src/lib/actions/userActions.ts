'use server';

import { API_URL } from '../config';

export const getMyArticle = async (_id: string, curCount: number) => {
    const url = new URL(`${API_URL}/user/articles/${_id}`);
    url.searchParams.append('curCount', curCount.toString());

    const res = await fetch(url, {
        cache: 'no-cache'
    });

    const data = await res.json();

    if (data.error) {
        return null;
    }

    return data as { result: Article[], totalPages: number };
}