import type { Metadata, NextPage } from 'next';
import type { PropsWithChildren } from 'react';
import { getOneArticle } from '@/lib/actions/articleActions';

type Props = {
    params: {
        _id: string;
    };
}

export const generateMetadata = async ({ params: { _id } }: Props): Promise<Metadata> => {
    
    const data = await getOneArticle(_id);
    const article = data.result as DetailArticle;

    return {
        title: `${article.title}`,
        description: `This page is Created by ${article.createdBy.name}.`
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