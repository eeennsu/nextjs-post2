import type { NextPage } from 'next';
import { ArticleForm, Modal } from '@/features';
import { getCurrentUser } from '@/lib/session';
import { redirect } from 'next/navigation';
import toast from 'react-hot-toast';

const CreateArticlePage: NextPage = async () => {

    const session = await getCurrentUser();

    // 현재 세션 정보 유저가 없으면 초기화면으로 리다이렉트
    if (!session?.user) {
        toast.error('유저 확인 중 오류가 발생했습니다!');
        redirect('/');
    }

    return (
        <Modal>
            <h3 className='md:text-5xl text-3xl max-w-5xl w-full font-[1000]'>
                Create a new Article
            </h3>
            <ArticleForm type='create' session={session} />
        </Modal>         
    );
};

export default CreateArticlePage;