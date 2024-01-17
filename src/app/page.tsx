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



const Title: FC = () => (
    <h1 className='text-2xl font-bold lg:text-5xl'>
        Categories
    </h1> 
)
