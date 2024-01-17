'use client';

import type { FC } from 'react';
import { useRouter, useSearchParams, usePathname } from 'next/navigation';
import { categoryFilters } from '@/constants';
import usePaginationStore from '@/zustand/PaginationStore/usePaginationStore';

const Category: FC = () => {

    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const curCategory = searchParams.get('category');
    
    const setCurPage = usePaginationStore(state => state.setCurPage);
    
    const handleTags = (filter: Category) => {
        if (filter === 'All') {
            router.push('/');
        } else {
            router.push(`${pathname}?category=${filter}`);
        }
        setCurPage(1);
    }

    return (
        <div className='flex items-center justify-between w-full gap-5 flex-wrap'>
            <div className='flex gap-2 overflow-auto pb-2'>
                {
                    categoryFilters.map((filter) => (
                        <button 
                            key={filter} type='button'
                            onClick={() => handleTags(filter)}
                            className={`${(!curCategory && filter === 'All') || (filter === curCategory) ? 'bg-light-white-500 font-bold' : 'font-normal'} px-4 py-3 rounded-lg whitespace-nowrap`}
                        >
                            {filter}
                        </button>
                    ))
                }
            </div>
        </div>
    );
}

export default Category;