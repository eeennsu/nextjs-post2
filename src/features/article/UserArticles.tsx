'use client';

import type { FC } from 'react';
import { getUserArticles } from '@/lib/actions/userActions';
import { useEffect, useState } from 'react';
import Image from 'next/image';
import MiniArticleCard from './MiniArticleCard';
import Link from 'next/link';
import Button3 from '@/components/Button3';
import toast from 'react-hot-toast';
import SkeletonBox from '@/components/SkeletonBox';

type Props = {
    mainArticleId: string;
    createdBy: NewUser;
}

const UserArticles: FC<Props> = ({ mainArticleId, createdBy: { avatarUrl, _id, name } }) => {

    const [relatedArticles, setRelatedArticles] = useState<Article[]>([]);
    const [isFetching, setIsFetching] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            try {
                setIsFetching(true);

                const data = await getUserArticles(_id) as { result: Article[] };

                setRelatedArticles(data.result);
            } catch (error) {
                console.log(error);
                toast.error('관련 포스트를 가져오는데 실패했습니다.');
            } finally {
                setIsFetching(false);
            }
        })();
    },[]);

    return (
        <section className='flex flex-col items-center justify-center w-full gap-8 mt-14 lg:mt-20 pb-14'>
            <h3 className='flex items-center justify-center w-full gap-8'>
                <span className='w-full h-0.5 bg-light-white-200' />
                <Image 
                    src={avatarUrl}
                    alt='user avatar'
                    width={52}
                    height={52}
                    className='rounded-full'
                /> 
                <span className='w-full h-0.5 bg-light-white-200' />
            </h3>
            <div className='flex flex-col w-full gap-8 mt-5 lg:mt-10'>
                <div className='flex items-center justify-center lg:justify-start'>
                    <p className='text-2xl font-bold '>
                        More by 
                        <Link href={`/user/profile/${_id}`} className='ml-3 text-blue-500 underline-offset-4 hover:underline'>
                            {name}
                        </Link>
                    </p>
                </div> 
                <div className='grid grid-cols-1 gap-x-8 gap-y-16 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
                    {
                        isFetching ? (
                            <Skeletons />
                        ) : relatedArticles.length >= 1 ? (
                            relatedArticles.filter((article) => article._id !== mainArticleId)?.map((article) => (
                                <MiniArticleCard key={article._id} article={article} />
                            ))
                        ) : relatedArticles.length === 0 ? null : (
                            <NotFounded />
                        )
                    }
                </div>
            </div>
        </section>
    );
}

export default UserArticles;



const Skeletons: FC = () => {

    return (
        [...new Array(4)].map((_, i) => (
            <SkeletonBox key={i} className='w-[276px] h-[140px]' />
        ))
    );
}

const NotFounded: FC = () => (
    <section className='flex flex-col items-center w-full'>
        <h3 className='text-xl'>
            There were no other posts or an error occurred so it couldn't be found.
        </h3>
    </section>
);