'use client';

import type { FC, ChangeEvent, FormEvent } from 'react';
import type { NewSession } from '@/lib/session';
import { useEffect, useState } from 'react';
import { categoryFilters } from '@/constants';
import { craeteNewArticle, updateMyArticle } from '@/lib/actions/articleActions';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import FormField from './FormField';
import useFormInputStore from '@/zustand/FormStore/useFormDatatStore';
import CustomMenu from './CustomMenu';
import toast from 'react-hot-toast';
import Button2 from '@/components/Button2';

type Props = {
    type: 'create' | 'edit';
    session: NewSession;
    editedArticle?: Article;
}

const ArticleForm: FC<Props> = ({ type, session, editedArticle }) => {

    const formData = useFormInputStore(state => state.formData);
    const setFormDatas = useFormInputStore(state => state.setFormData);
    const allSetFormData = useFormInputStore(state => state.allSetFormData);
    const resetFormData = useFormInputStore(state => state.resetFormData);

    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const isEditing = type === 'edit' && editedArticle;

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

        try {
            if (type === 'create') {
                const newForm: Form = {
                    ...formData,
                    title: formData.title.trim(),
                    description: formData.description.trim(),
                    liveSiteUrl: formData.liveSiteUrl.trim(),
                    githubUrl: formData.githubUrl.trim()      
                };

                const result = await craeteNewArticle(newForm, session.user._id);

                if (!result) {
                    toast.error('새 기사 등록에 실패하였습니다');
                    router.push('/');
                    return;
                }

                toast.success('등록되었습니다!');
                router.push('/');
            } else {
                const editedForm: Form = {
                    ...formData,
                    title: formData.title.trim(),
                    description: formData.description.trim(),
                    liveSiteUrl: formData.liveSiteUrl.trim(),
                    githubUrl: formData.githubUrl.trim(),
                };

                const result = await updateMyArticle(editedArticle!._id, editedForm, editedArticle!.createdBy._id);

                if (!result) {
                    toast.error('기사의 수정에 실패하였습니다.');
                    router.push('/');
                    return;
                }

                toast.success('수정되었습니다!');
                router.push('/');
            }
        } catch (error) {
            console.log((error as Error).message);
            toast.error('등록에 실패하였습니다.');
        } finally {    
            setIsSubmitting(false);
            resetFormData();
        }
    }

    useEffect(() => {
        if (isEditing) {
            allSetFormData(editedArticle);
        }
    }, [isEditing]);

    return (
        <form className='flex flex-col items-center justify-start w-full max-w-5xl pt-6 mx-auto text-lg lg:mt-14 mt-7 gap-9' onSubmit={handleSubmit}>
            <div className='flex justify-start items-center w-full lg:min-h-[230px] relative'>
                <label className='z-10 w-full p-20 text-center text-gray-100 border-2 border-dashed rounded-md border-gray-100/80' htmlFor='poster'>
                    {formData.image.length === 0 && 'Choose a poster for your article.'}
                </label>
                <input 
                    className='absolute z-30 w-full h-full opacity-0 cursor-pointer'
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

            <div className='flex items-end justify-between w-full'>
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
                                        <Image 
                                            src='/plus.svg'
                                            alt='plus'
                                            width={26}
                                            height={26}
                                            className='mr-2'
                                        />                                    
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
                                        <Image 
                                            src='/update.svg'
                                            alt='update'
                                            width={20}
                                            height={20}
                                            className='mr-2'
                                        />                                
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
            <Image
                src='/loading.svg'
                alt='loading'
                width={26}
                height={26}
                className='mr-2 animate-spin'
            />
            {/* <div className='w-5 h-5 mr-4 border-t-4 border-white border-solid rounded-full animate-spin' /> */}
            <span>Loading...</span>
        </>
    );
}