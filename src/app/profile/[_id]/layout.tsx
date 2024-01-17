import type { Metadata, NextPage } from 'next';
import type { PropsWithChildren } from 'react';
import { getCurrentUser } from '@/lib/session';

export const generateMetadata = async (): Promise<Metadata> => {
    
    const data = await getCurrentUser();

    return {
        title: `${data?.user.name}'s Profile`,
        description: `This page is ${data?.user.name}'s Profile Page.`
    };
}

const ProfileLayout: NextPage<PropsWithChildren> = ({ children }) => {

    return (
        <>
            {children}
        </>
    );
};

export default ProfileLayout;