'use client';

import type { FC } from 'react';
import { shallow } from 'zustand/shallow';
import { useEffect, useState } from 'react';
import usePaginationStore from '@/zustand/PaginationStore/usePaginationStore';
import PgButton from './PgButton';

const Pagination: FC = () => {

    const { curPage, setCurPage, totalPage, isFetching } = usePaginationStore(state => ({
        curPage: state.curPage,
        setCurPage: state.setCurPage,
        totalPage: state.totalPage,
        isFetching: state.isFetching
    }), shallow);
    
    const [startNum, setStartNum] = useState(1);    
    const pageCount = 5;
    const noPrev = startNum === 1;
    const noNext = startNum + pageCount -1 >= totalPage;

    useEffect(() => {
        if (curPage === startNum + pageCount) {
            setStartNum(prev => prev + pageCount);
        }

        if (curPage < startNum) {
            setStartNum(prev => prev - pageCount);
        }
    }, [curPage, startNum]);

    return (
        <nav className='flex items-center gap-4'>          
            <button className={`${noPrev && 'bg-red-300'}`} onClick={() => setCurPage(startNum - 1)} disabled={isFetching || noPrev}>
                이전
            </button>
            {
                Array.from({ length: pageCount }).map((_, i) => (
                    (i + startNum <= totalPage) && (
                        <PgButton key={i + startNum} num={i + startNum} isCurrent={i + startNum === curPage} onClick={() => setCurPage(i + startNum)} isFetching={isFetching} />
                    )
                ))
            }
            <button className={`${noNext && 'bg-red-300'}`} onClick={() => setCurPage(startNum + pageCount)} disabled={isFetching || noNext}>
                이후
            </button>
        </nav>
    );
}

export default Pagination;


// {
//     startNum + i <= totalPage && (
//         <PgButton key={i} num={startNum + i} isCurrent={curPage === i + 1} onClick={() => setCurPage(i + 1)} isFetching={isFetching} />
//     )
// }


{/* <button className={`${noNext && 'bg-red-300'}`} onClick={() => setCurPage(startNum + pageCount)}>
다음
</button> */}