'use client';

import { useSession } from 'next-auth/react';
import Link from 'next/link';
import type { FC } from 'react';
import AuthProviders from '../providers/AuthProviders';

const SessionCondition: FC = () => {

    const session = false;

    return (
        <>
            {
                session ? (
                    <>
                        User Photo                       

                        <Link href="/create-project">
                            Share
                        </Link>
                    </>
                ) : (
                    <AuthProviders />
                )
            }
        </>
    );
}

export default SessionCondition;