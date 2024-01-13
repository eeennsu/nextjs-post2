import type { NewUser } from './auth.types';
import type { CateogryFilter } from '@/constants';

type Form = {
    title: string;
    description: string;
    image: string;
    liveSiteUrl: string;
    githubUrl: string;
    category: CateogryFilter | '';
}

type Article = Form & {
    id: string;
    createdBy: NewUser;
}