'use client';

import type { FC, PropsWithChildren } from 'react';
import { Toaster } from 'react-hot-toast';

import AuthProvider from './AuthProvider';

const ProviderIndex: FC<PropsWithChildren> = ({ children }) => {

    return (
        <AuthProvider>
            {children}
            <Toaster />
        </AuthProvider>
    );
}

export default ProviderIndex;