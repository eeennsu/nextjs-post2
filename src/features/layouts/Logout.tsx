'use client'

import type { FC } from 'react';
import { signOut } from 'next-auth/react';
import Button from '@/components/Button';

const Logout: FC = () => {

    return (
        <Button onClick={() => signOut()} isWhite>
            Logout
        </Button>
    );
}

export default Logout;