'use client';

import type { FC, PropsWithChildren } from 'react';
import AuthProvider from './AuthProvider';

const ProviderIndex: FC<PropsWithChildren> = ({ children }) => {

    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    );
}

export default ProviderIndex;