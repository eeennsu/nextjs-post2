'use client';

import type { FC } from 'react';
import { shallow } from 'zustand/shallow';
import usePaginationStore from '@/zustand/PaginationStore/usePaginationStore';
import PgButton from './PgButton';

const Pagination: FC = ({  }) => {

    const { curPage, setCurPage, totalPage, isFetching } = usePaginationStore(state => ({
        curPage: state.curPage,
        setCurPage: state.setCurPage,
        totalPage: state.totalPage,
        isFetching: state.isFetching
    }), shallow);

    return (
        <div className='flex items-center gap-4'>
            {
                Array.from({ length: totalPage }).map((_, i) => (
                    <PgButton key={i} num={i+1} isCurrent={curPage === i+1} onClick={() => setCurPage(i + 1)} isFetching={isFetching} />
                ))
            }
        </div>
    );
}

export default Pagination;