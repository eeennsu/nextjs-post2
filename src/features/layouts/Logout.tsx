'use client'

import type { FC } from 'react';
import { signOut } from 'next-auth/react';

const Logout: FC = () => {

    return (
        <button onClick={() => signOut()}>
            Logout
        </button>
    );
}

export default Logout;