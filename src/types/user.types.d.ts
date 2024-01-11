import type { Article } from './article.types';
import type { NewUser } from './auth.types';

type UserProfile = NewUser & {
    desc: string;
    githubURL: string;
    linkedinURL: string;
    articles: {
        edges: {
            node: Article[];
        };
        pageInfo: {
            hasPreviousPage: boolean;
            hasNextPage: boolean;
            startCursor: string;
            endCursor: string;
        };
    };
}