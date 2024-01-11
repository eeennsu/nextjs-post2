import type { User, Session } from 'next-auth';

type NewUser = {
    id: string;
    name: string;
    email: string;
    avatarURL: string;
}

type NewSession = Session & {
    user: User & NewUser;
}