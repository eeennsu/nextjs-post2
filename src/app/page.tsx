import type { FC } from 'react';
import type { NextPage } from 'next';
import { getArticles } from '@/lib/actions';
import ArticleCard from '@/features/root/ArticleCard';

const RootPage: NextPage = async () => {

    const data = await getArticles(1);
    const articles = data.result as Article[];
    const totalPages = data.totalPages;
 
    if (articles.length === 0 || !articles) {
        return (
            <section className='flex flex-col items-center justify-start paddings'>
                <Title />
                <p className='w-full px-2 my-10 text-lg text-center'>
                    No articles found, go create some first.
                </p>
            </section>
        );
    }

    return (
        <section className='flex flex-col items-center justify-start mb-16 paddings'>
            <Title />
            <section className='grid w-full grid-cols-1 gap-10 mt-10 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
                {
                    articles?.map((article) => (
                        <ArticleCard key={article.id} article={article} />
                    ))
                }
            </section>
        </section>
    );
};

export default RootPage;



export const revalidate = 10;

const Title: FC = () => {
    
    return (
        <h1 className='text-2xl font-bold lg:text-5xl'>Categories</h1> 
    ); 
} 