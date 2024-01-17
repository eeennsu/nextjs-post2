import type { FC } from 'react';
import type { NextPage } from 'next';
import { getUserArticles, getUserProfile } from '@/lib/actions/userActions';
import UserProfile from '@/features/profile/UserProfile';

type Props = {
    params: {
        _id: string;    
    }
}

const ProfilePage: NextPage<Props> = async ({ params: { _id } }) => {

    const userData = await getUserProfile(_id);
    const articlesData = await getUserArticles(_id);

    if (!userData?.result || !articlesData?.result) {
        return (
            <FailedUserPosts />
        )
    }

    return (
        <UserProfile userInfo={userData.result} userArticles={articlesData.result} />
    );
};

export default ProfilePage;



const FailedUserPosts: FC = () => {

    return (
        <p>
            Failed to fetch user data.
        </p>
    );
}