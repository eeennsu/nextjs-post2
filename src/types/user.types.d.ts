import type { Article } from './article.types';
import type { NewUser } from './auth.types';

type UserProfile = NewUser & {
    description: string;
    githubUrl: string;
    linkedinUrl: string;
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