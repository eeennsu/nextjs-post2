import type { Metadata, NextPage } from 'next';
import type { PropsWithChildren } from 'react';
import { getOneArticle } from '@/lib/actions/articleActions';

type Props = {
    params: {
        _id: string;
    };
}

const DetailArticleLayout: NextPage<PropsWithChildren> = ({ children }) => {

    return (
        <>
            {children}
        </>
    );
};

export default DetailArticleLayout;