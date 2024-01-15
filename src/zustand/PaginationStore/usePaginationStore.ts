import type { PaginationStoreType } from './types';
import { createWithEqualityFn } from 'zustand/traditional';
import { devtools } from 'zustand/middleware';

const usePaginationStore = createWithEqualityFn<PaginationStoreType>()(
    devtools(
        (set) => ({
            articles: [],
            setArticles: (articles) => set(() => ({ articles }), false, 'SET_ARTICLES'), 

            curPage: 1,
            setCurPage: (curPage) => set(() => ({ curPage }), false, 'SET_CUR_PAGE'),

            totalPage: 0,
            setTotalPage: (totalPage) => set(() => ({ totalPage }), false, 'SET_TOTAL_PAGE'),

            
            isFetching: false,            
            setIsFetching: (trigger) => set(() => ({ isFetching: trigger }), false, 'SET_IS_FETCHING')
        })
    )
);

export default usePaginationStore;