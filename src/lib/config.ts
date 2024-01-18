export const API_URL = process.env.NODE_ENV === 'development' ? process.env.NEXT_PUBLIC_API_URL! : process.env.NEXT_DEPLOY_API_URL;

export const headers = {
    'Accept': 'application/json',
};