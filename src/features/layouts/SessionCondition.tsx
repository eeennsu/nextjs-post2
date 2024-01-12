import type { FC } from 'react';
import { getCurrentUser } from '@/lib/session';
import Link from 'next/link';
import Auth from './Auth';
import Image from 'next/image';
import ProfileMenu from './ProfileMenu';
import Button from '@/components/Button';

const SessionCondition: FC = async () => {

    const session = await getCurrentUser();

    return (
        session?.user ? (
            <div className='flex items-center gap-4'>
                <ProfileMenu session={session} />               
                <Link href="/create-article" className='font-semibold'>
                    <Button className='bg-slate-700 hover:bg-slate-600'>
                        Share
                    </Button>
                </Link>
            </div>
        ) : (
            <Auth />
        )
    );
}

export default SessionCondition;