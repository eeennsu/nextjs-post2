export const API_URL = process.env.NODE_ENV === 'production' ? '/api' : process.env.NEXT_PUBLIC_API_URL!;

export const headers = {
    'Accept': 'application/json',
};