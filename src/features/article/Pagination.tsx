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
            <button className={`text-2xl font-extrabold text-black ${noPrev && 'text-opacity-15'}`} onClick={() => setCurPage(startNum - 1)} disabled={isFetching || noPrev}>
                &lt;
            </button>
            <ul className='flex items-center gap-4 mx-4'>
                {
                    Array.from({ length: pageCount }).map((_, i) => (
                        (i + startNum <= totalPage) && (
                            <li key={i + startNum} >
                                <PgButton num={i + startNum} isCurrent={i + startNum === curPage} onClick={() => setCurPage(i + startNum)} isFetching={isFetching} />
                            </li>
                        )
                    ))
                }
            </ul>
            <button className={`text-2xl font-extrabold text-black ${noNext && 'text-opacity-15'}`} onClick={() => setCurPage(startNum + pageCount)} disabled={isFetching || noNext}>
                &gt;
            </button>
        </nav>
    );
}

export default Pagination;