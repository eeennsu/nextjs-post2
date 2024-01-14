import { getOneArticle } from '@/lib/actions';
import type { NextPage } from 'next';

type Props = {
    params: {
        _id: string;
    }
}

const ArticlePage: NextPage<Props> = async ({ params: { _id } }) => {

    const article = await getOneArticle(_id);

    console.log(article);

    return (
        <div>
            default page
        </div>
    );
};

export default ArticlePage;