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
                        <Image src={session?.user?.avatarUrl} alt='avatar' width={40} height={40} className='rounded-full' />
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