import { getOneArticle } from '@/lib/actions';
import type { NextPage } from 'next';
import Link from 'next/link';

type Props = {
    params: {
        _id: string;
    }
}

const ArticlePage: NextPage<Props> = async ({ params: { _id } }) => {

    const { result } = await getOneArticle(_id) as { result: Article };

    if (!result) {
        return (
            <div className='flex items-center justify-center flex-col lg:pt-22 pt-11 gap-4'>
                <h2 className='text-xl font-bold'>
                    Failed to fetch article information.
                </h2>
                <Link href='/' className='underline'>
                    Home
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