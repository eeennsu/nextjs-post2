import type { FC } from 'react';
import { getCurrentUser } from '@/lib/session';
import Link from 'next/link';
import Auth from './Auth';
import Image from 'next/image';
import Logout from './Logout';

const SessionCondition: FC = async () => {

    const session = await getCurrentUser();

    return (
        session?.user ? (
            <>
                {
                    session?.user?.avatarUrl && (
                        <Image src={session?.user?.avatarUrl} alt='avatar' width={36} height={36} className='rounded-full object-contain' />
                    )
                }                   

                <Link href="/create-project">
                    Share
                </Link>
                <Logout />
            </>
        ) : (
            <Auth />
        )
    );
}

export default SessionCondition;