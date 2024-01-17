'use client';

import type { FC } from 'react';
import { useEffect } from 'react';
import { getArticles } from '@/lib/actions/articleActions';
import { shallow } from 'zustand/shallow';
import ArticleCard from '../root/ArticleCard';
import Pagination from './Pagination';
import usePaginationStore from '@/zustand/PaginationStore/usePaginationStore';
import SkeletonBox from '@/components/SkeletonBox';

const Articles: FC = () => {

    const { curPage, setTotalPage, articles, setArticles, isFetching, setIsFetching } = usePaginationStore(state => ({
        curPage: state.curPage,
        setTotalPage: state.setTotalPage,
        articles: state.articles,
        setArticles: state.setArticles,
        isFetching: state.isFetching,
        setIsFetching: state.setIsFetching
    }), shallow);

    useEffect(() => {
        (async () => {
            try {
                setIsFetching(true);
                const data = await getArticles(curPage);
                console.log(data?.result);
                const articles = data?.result;
                const totalPages = data?.totalPages;

                if (totalPages && totalPages !== 0) {
                    setTotalPage(totalPages);        
                }      

                if (articles) {
                    setArticles(articles);
                }
            } catch (error) {
                throw error;
            } finally {
                setIsFetching(false);
            }
        })();
    }, [curPage]); 

    return (
        <>
            <section className='grid w-full grid-cols-1 gap-10 mt-10 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2'>
                {
                    isFetching ? (
                        <Skeletons />
                    ) : articles?.length === 0 ? (
                        <FirstCreate />
                    ) : (
                        articles?.map((article) => (
                            <ArticleCard key={article._id} article={article} />
                        ))
                    )
                }
            </section>
            <section className='flex items-center justify-center w-full mt-14'>
                {
                    articles.length >= 1 && (
                        <Pagination />
                    )
                }
            </section>
        </>
    );
}

export default Articles;



const Skeletons: FC = () => {
    
    return (
        [...new Array(8)].map((_, i) => (
            <SkeletonBox key={i} className='w-[250px] h-[310px]' />
        ))
    );
}

const FirstCreate: FC = () => {

    return (
        <div className='flex flex-col items-center justify-start paddings'>
            <p className='w-full px-2 my-10 text-lg text-center'>
                Not founded any articles, go create some first.
            </p>
        </div>
    );
}