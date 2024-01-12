'use client';

import type { FC } from 'react';
import { getProviders, signIn } from 'next-auth/react';
import { useState, useEffect } from 'react';
import Button from '@/components/Button';

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
                        <Button key={provider.id} onClick={() => signIn(provider.id)}>
                            Login
                        </Button>
                    ))
                }
            </div>
        );
    } 

    return null;
}

export default Auth;