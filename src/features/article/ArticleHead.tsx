import { getCurrentUser } from '@/lib/session';
import { formatDate } from '@/utils/dateFormat';
import Image from 'next/image';
import type { FC } from 'react';
import ArticleActions from './ArticleActions';

type Props = {
    articleId: string;
    title: string;
    category: Category;
    createdAt: string;
    createdBy: NewUser;
}

const ArticleHead: FC<Props> =  async ({ articleId, title, category, createdAt, createdBy: { avatarUrl, name, _id: creatorId } }) => {

    const session = await getCurrentUser();

    return (
        <section className='flex items-center justify-center w-full gap-5 lg:justify-start'>
            <Image
                src={avatarUrl}
                width={40}
                height={40}
                className='hidden rounded-full lg:block'
                alt='avatar'
            />
            <div className='flex flex-col justify-center gap-4 lg:gap-2 w-full'>
                <h2 className='text-4xl font-bold lg:text-3xl'>
                    {title}
                </h2>
                <div className='flex items-center justify-center lg:justify-between'>
                    <div className='flex items-center justify-start'>
                            <p className='font-light max-lg:flex max-lg:gap-2 max-lg:items-center'>
                                <Image
                                    src={avatarUrl}
                                    width={30}
                                    height={30}
                                    className='block rounded-full lg:hidden'
                                    alt='avatar'
                                />
                                {name}
                            </p>
                            <span className='mx-2'>
                                &middot;
                            </span>
                            <p className='text-purple-500'>
                                {category}
                            </p>
                            <p className='ml-5 lg:ml-10 italic opacity-80'>
                                {formatDate(createdAt) || '2024-01-14 일요일'}
                            </p>
                    </div>
                    {
                        creatorId === session?.user._id && (
                            <div className='flex items-center gap-2'>
                                <ArticleActions articleId={articleId} />
                            </div>
                        )
                    }
                </div>
            </div>
        </section>
    );
}

export default ArticleHead;