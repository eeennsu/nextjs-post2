import type { Metadata, NextPage } from 'next';
import type { PropsWithChildren } from 'react';

// export const generateMetadata = async ({ params: { _id } }: Props): Promise<Metadata> => {
    
//     const data = await getOneArticle(_id);
//     const article = data.result as Article;

//     return {
//         title: `${article.title}`,
//         description: `This page is Created by ${article.createdBy.name}.`
//     };
// }

const DetailArticleLayout: NextPage<PropsWithChildren> = ({ children }) => {

    return (
        <>
            {children}
        </>
    );
};

export default DetailArticleLayout;