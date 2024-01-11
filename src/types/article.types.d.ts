import type { NewUser } from './auth.types';

type Form = {
    title: string;
    description: string;
    image: string;
    liveSiteUrl: string;
    githubUrl: string;
    category: string;
}

type Article = Form & {
    id: string;
    createdBy: NewUser;
}