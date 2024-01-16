import type { FC } from 'react';
import type { NextPage } from 'next';
import Articles from '@/features/article/Articles';

const RootPage: NextPage = () => {

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
    <h1 className='text-2xl font-bold lg:text-5xl'>
        Categories
    </h1> 
)
