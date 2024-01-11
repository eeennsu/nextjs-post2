'use client';

import type { FC } from 'react';
import type { Session, User } from 'next-auth';
import { getProviders, signIn } from 'next-auth/react';
import { useState, useEffect } from 'react';

export type NewSession = Session & {
    user: User & NewUser;
}

const AuthProviders: FC = () => {

    const [providers, setProviders] = useState<Providers | null>(null);

    useEffect(() => {
        getProviders()
            .then(res => setProviders(res));
    }, []);

    if (providers) {
        return (
            <div>
                {
                    Object.values(providers).map((provider) => (
                        <button key={provider.id}>
                            {provider.id}
                        </button>
                    ))
                }
            </div>
        );
    } 

    return (
        <div>
            AuthProviders
        </div>
    );
}

export default AuthProviders;