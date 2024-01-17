import Button from '@/components/Button';
import type { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ArticleCard from '../root/ArticleCard';

type Props = {
    userInfo: UserInfo;
    userArticles: Article[];
}

const UserProfile: FC<Props> = ({ userInfo, userArticles }) => {

    return (
        <section className='flex items-center justify-center flex-col max-w-10xl w-full mx-auto paddings mt-6 lg:mt-14'>
            <section className='flex justify-between items-center max-lg:flex-col max-lg:gap-4'>
                <div className='flex items-center flex-col w-full'>
                    <Image 
                        src={userInfo.avatarUrl}
                        alt='user icon'
                        width={100}
                        height={100}
                        className='rounded-full border-white border-2'
                    />
                    <p className='text-4xl font-bold mt-10'>
                        {userInfo.name}
                    </p>
                    <p className='md:text-5xl text-3xl font-extrabold max-w-lg mt-4'>
                        Hello! I am web devloper.
                    </p>
                    <div className='flex mt-8 w-full max-lg:justify-center'>
                        <div className='flex flex-wrap gap-5 p-4 bg-slate-300/75 rounded-lg'>
                            <Button>
                                Follow
                            </Button>
                            <Link href={`mailto:${userInfo.email}`}>
                                <Button color='white'>
                                    Hire me
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
                {
                    userArticles?.length >= 1 ? (
                        <Image 
                            src={userArticles[0].image}
                            alt='article image'
                            width={542}
                            height={300}
                            className='rounded-xl object-contain'
                        />
                    ) : (
                        <Image 
                            src='profile-post.png'
                            width={542}
                            height={300}
                            alt='project image'
                            className='rounded-xl'
                        />
                    )
                }
            </section>
            <section className='flex justify-start items-center flex-col lg:mt-28 mt-16 w-full'>
                <p className='w-full text-left text-lg font-semibold'>
                    Recent Works
                </p>
                <div className='grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-5'>
                    {
                        userArticles?.slice(1, userArticles.length >= 5 ? 5 : userArticles.length).map((article) => (
                            <ArticleCard key={article._id} article={article} />
                        ))
                    }
                </div>
            </section>
        </section>
    );
}

export default UserProfile;