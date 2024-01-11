type Provider = {
    id: string;
    name: string;
    type: string;
    signinUrl: string;
    callbackUrl: string;
    signinUrlParams?: Record<string, string> | null;
}

type Providers = Record<string, Provider>;

type NewUser = {
    id: string;
    name: string;
    email: string;
    avatarUrl: string;
}