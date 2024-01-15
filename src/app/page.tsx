import type { FC } from 'react';
import type { NextPage } from 'next';
import { getArticles } from '@/lib/actions/articleActions';
import ArticleCard from '@/features/root/ArticleCard';
import Pagination from '@/features/article/Pagination';
import Articles from '@/features/article/Articles';

const RootPage: NextPage = async () => {


    // if (!articles) {
    //     throw new Error('Article을 가져오는 중 오류가 발생했습니다.');
    // }

    // if (articles.length === 0) {
    //     return (
    //         <FirstCreate />
    //     );
    // }

    return (
        <div className='flex flex-col items-center justify-start mb-16 paddings'>
            <Title />
            <Articles />
        </div>
    );
};

export default RootPage;



export const revalidate = 10;



const FirstCreate: FC = () => (
    <div className='flex flex-col items-center justify-start paddings'>
        <Title />
        <p className='w-full px-2 my-10 text-lg text-center'>
            Not founded any articles, go create some first.
        </p>
    </div>
)

const Title: FC = () => (
    <h1 className='text-2xl font-bold lg:text-5xl'>Categories</h1> 
)
