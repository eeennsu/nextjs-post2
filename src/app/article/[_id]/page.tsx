import type { FC } from 'react';
import type { NextPage } from 'next';
import { getArticles, getOneArticle } from '@/lib/actions/articleActions';
import Link from 'next/link';
import DetailArticle from '@/features/article/DetailArticle';

type Props = {
    params: {
        _id: string;
    }
}

const DetailArticlePage: NextPage<Props> = async ({ params: { _id } }) => {

    const data = await getOneArticle(_id);

    if (!data?.result) {
        return (
            <GoToHome />
        );
    }

    return (
        <DetailArticle article={data.result} />
    );
};

export default DetailArticlePage;



const GoToHome: FC = () => (    
    <div className='flex flex-col items-center justify-center gap-4 lg:pt-22 pt-11'>
        <h2 className='text-xl font-bold'>
            Failed to fetch article information.
        </h2>
        <Link href='/' className='underline'>
            Home
        </Link>
    </div>
)


