import type { NewUser } from './auth.types';

type Form = {
    title: string;
    desc: string;
    image: string;
    liveSiteURL: string;
    githubURL: string;
    category: string;
}

type Article = Form & {
    id: string;
    createdBy: NewUser;
}