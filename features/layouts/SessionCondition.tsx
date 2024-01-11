'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import type { FC } from 'react';

const SessionCondition: FC = () => {

    const session = {};

    return (
        <>
            User Profile 

            <Link href="/create-project">
                Share
            </Link>
        </>
    );
}

export default SessionCondition;