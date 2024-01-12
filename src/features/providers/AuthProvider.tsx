'use client';

import type { FC, PropsWithChildren } from 'react';
import type{ Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';

type Props = {
    session?: Session | null | undefined;
}

const AuthProvider: FC<PropsWithChildren<Props>> = ({ children, session }) => {

    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    );
}

export default AuthProvider;