import { getOneArticle } from '@/lib/actions';
import type { NextPage } from 'next';
import Link from 'next/link';

type Props = {
    params: {
        _id: string;
    }
}

const ArticlePage: NextPage<Props> = async ({ params: { _id } }) => {

    const { result } = await getOneArticle(_id);

    if (!result) {
        return (
            <div className='flex items-center justify-center'>
                <h1 className='text-xl'>Article not found</h1>
                <Link href='/' className='underline'>
                    <a>Home</a>
                </Link>
            </div>
        )
    }

    return (
        <div>
            default page
        </div>
    );
};

export default ArticlePage;