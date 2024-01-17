'use client';

import type { FC } from 'react';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { deleteMyArticle } from '@/lib/actions/articleActions';
import Image from 'next/image';
import Link from 'next/link';
import toast from 'react-hot-toast';

type Props = {
    articleId: string;
}

const ArticleActions: FC<Props> = ({ articleId }) => {

    const router = useRouter();
    const [isDeleting, setIsDeleting] = useState<boolean>(false);

    const deletingArticle = async () => {
        try {
            setIsDeleting(true);

            await deleteMyArticle(articleId);

        } catch (error) {
            console.log(error);
        } finally {
            setIsDeleting(false);
            router.push('/');
        }
    }

    const handleDeleteArticle = () => {
        toast.promise(
            deletingArticle(),
            {
                loading: '삭제 중..',
                error: '삭제에 실패하였습니다',
                success: '삭제되었습니다'
            }
        );        
    }

    return (
        <>
            <Link href={`/edit-article/${articleId}`} className='flex items-center justify-center p-3 text-gray-100 bg-light-white-400 hover:bg-slate-300 rounded-lg text-sm font-medium'>
                <Image 
                    src='/pencile.svg'
                    width={16}
                    height={16}
                    alt='edit'
                />
            </Link>
            <button className={`p-3 text-gray-100 hover:bg-red-600 rounded-lg text-sm font-medium ${isDeleting ? 'bg-gray' : 'bg-primary'}`} onClick={handleDeleteArticle}>
                <Image 
                    src='/trash.svg'
                    alt='delete'
                    width={16}
                    height={16}
                />
            </button>
        </>
    );
}

export default ArticleActions;