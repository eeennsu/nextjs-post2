'use client';

import type { FC, ChangeEvent, FormEvent } from 'react';
import type { NewSession } from '@/lib/session';
import { useState } from 'react';
import { categoryFilters } from '@/constants';
import { craeteNewArticle } from '@/lib/actions';
import Image from 'next/image';
import FormField from './FormField';
import useFormInputStore from '@/zustand/FormStore/useFormDatatStore';
import CustomMenu from './CustomMenu';
import toast, { LoaderIcon } from 'react-hot-toast';
import PlusIcon from '@/components/PlusIcon';
import Button2 from '@/components/Button2';
import RefreshIcon from '@/components/RefreshIcon';
import { useRouter } from 'next/navigation';

type Props = {
    type: 'create' | 'update';
    session: NewSession;
}

const ArticleForm: FC<Props> = ({ type, session }) => {

    const formData  = useFormInputStore(state => state.formData);
    const setFormDatas = useFormInputStore(state => state.setFormData);

    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const files = e.target.files;

        if (!files) {
            toast.error('이미지 업로드에 실패하였습니다.');
            return;
        }

        const file = files[0];

        if (!file.type.includes('image')) {
            toast.error('이미지를 선택해주세요.');
            return;
        }

        const reader = new FileReader();                // 파일을 비동기적으로 읽을 수 있는 객체이다. 파일을 처리할 떄 사용한다.

        reader.readAsDataURL(file);                     // 이미지를 데이터 URL로 변경한다.

        reader.onload = () => {                         // 파일이 로드될 때 실행되는 이벤트 핸들러
            const result = reader.result;               // FileReade 객체가 읽은 파일의 결과를 나타낸다.

            if (typeof result === 'string') {
                setFormDatas('image', result);
            } else {
                toast.error('이미지 url 해석에 실패하였습니다.');
            }
        }
    }
    
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsSubmitting(true);
        // toast.loading('등록하는 중..');
        
        try {
            if (type === 'create') {
                const result = await craeteNewArticle({
                    ...formData,
                    title: formData.title.trim(),
                    description: formData.description.trim(),
                    liveSiteUrl: formData.liveSiteUrl.trim(),
                    githubUrl: formData.githubUrl.trim()               
                }, session.user._id);

                if (!result) {
                    toast.error('이미지를 업로딩하는 과정에서 오류가 발생했습니다.');
                    router.push('/');
                    return;
                }

                toast.success('등록되었습니다!');
                router.push('/');
            } else {

            }
        } catch (error) {
            console.log((error as Error).message);
            toast.error('등록에 실패하였습니다.');
        } finally {    
            setIsSubmitting(false);
        }
    }

    return (
        <form className='flex flex-col items-center justify-start w-full max-w-5xl pt-6 mx-auto text-lg lg:mt-14 mt-7 gap-9' onSubmit={handleSubmit}>
            <div className='flex justify-start items-center w-full lg:min-h-[230px] relative'>
                <label className='z-10 w-full p-20 text-center text-gray-100 border-2 border-dashed rounded-md border-gray-100/80' htmlFor='poster'>
                    {formData.image.length === 0 && 'Choose a poster for your article.'}
                </label>
                <input 
                    className='absolute opacity-0 z-30 w-full h-full cursor-pointer'
                    id='image'
                    type='file'
                    accept='image/*'
                    required={type === 'create'}
                    onChange={handleChangeImage}
                />    
                {
                    formData.image && (
                        <Image 
                            src={formData.image}
                            className='z-20 object-contain sm:p-10'
                            alt='article poster'
                            fill
                        />
                    )
                }
            </div>

            <FormField 
                label='Title'
                formKey='title'
                placeholder='Flexibble'
            />

            <FormField 
                label='Description'
                formKey='description'
                placeholder='Showcase and discover remarkable developer projects.'
                isTextArea
            />

            <FormField 
                type='url'
                label='Website URL'
                formKey='liveSiteUrl'
                placeholder='https://velog.io/@diso592/posts'                
            />

            <FormField 
                type='url'
                label='GitHub URL'
                formKey='githubUrl'
                placeholder='https://github.com/eeennsu'
            />

            <div className='flex justify-between w-full items-end'>
                <CustomMenu 
                    label='Category'
                    filters={categoryFilters}
                />
                {
                    type === 'create' ? (
                        <Button2 type='submit' disabled={isSubmitting}>
                            {
                                isSubmitting ? (
                                    <Spinner />
                                ) : (
                                    <>
                                        <PlusIcon className='mr-2 h-5 w-5' />
                                        create
                                    </>
                                )
                            }
                        </Button2>
                    ) : (
                        <Button2 type='submit' color='green' disabled={isSubmitting}>
                            {
                                isSubmitting ? (
                                    <Spinner />
                                ) : (
                                    <>
                                        <RefreshIcon className='mr-2 h-5 w-5' />
                                        update
                                    </>
                                )
                            }                            
                        </Button2>
                    )
                }
            </div>          
        </form>
    );
}

export default ArticleForm;



const Spinner: FC = () => {
    
    return (
        <>
            <LoaderIcon className="mr-2 h-5 w-5 animate-spin" />
            <span>Loading...</span>
        </>
    );
}