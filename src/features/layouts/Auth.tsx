'use client';

import type { FC } from 'react';
import { getProviders, signIn } from 'next-auth/react';
import { useState, useEffect } from 'react';

const Auth: FC = () => {

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
                        <button key={provider.id} onClick={() => signIn(provider.id)}>
                            Login
                        </button>
                    ))
                }
            </div>
        );
    } 

    return null;
}

export default Auth;