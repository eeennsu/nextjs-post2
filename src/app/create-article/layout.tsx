import type { Metadata, NextPage } from 'next';
import type { PropsWithChildren } from 'react';

export const metadata: Metadata = {
    title: 'Create New Article',
    description: 'This page is Create a new article page.'
};

const CreateArticleLayout: NextPage<PropsWithChildren> = ({ children }) => {

    return (
        <>
            {children}
        </>
    );
};

export default CreateArticleLayout;