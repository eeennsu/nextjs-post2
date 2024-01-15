export type PaginationStoreType = {
    articles: Article[];
    setArticles: (articles: Article[]) => void;

    curPage: number;
    setCurPage: (curPage: number) => void;
    
    totalPage: number;
    setTotalPage: (totalPage: number) => void;

    isFetching: boolean;
    setIsFetching: (trigger: boolean) => void;
}