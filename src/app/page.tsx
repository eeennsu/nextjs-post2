import type { NextPage } from 'next';
import Articles from '@/features/root/Articles';
import Category from '@/features/root/Category';

const RootPage: NextPage = () => {

    return (
        <div className='flex flex-col items-center justify-start mb-16 paddings'>
            <Category />
            <Articles />
        </div>
    );
};

export default RootPage;



export const revalidate = 0;