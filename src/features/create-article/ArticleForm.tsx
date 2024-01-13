'use client';

import type { FC, ChangeEvent, FormEvent } from 'react';
import type { NewSession } from '@/lib/session';
import { useState } from 'react';
import { shallow } from 'zustand/shallow';
import { categoryFilters } from '@/constants';
import Image from 'next/image';
import FormField from './FormField';
import useFormInputStore from '@/zustand/FormStore/useFormDatatStore';
import CustomMenu from './CustomMenu';
import toast from 'react-hot-toast';

type Props = {
    type: 'create' | 'update';
    session: NewSession;
}

const ArticleForm: FC<Props> = ({ type, session }) => {

    const { title, description, image, liveSiteUrl, githubUrl, category }  = useFormInputStore(state => ({
        title: state.formData.title, 
        description: state.formData.description, 
        image: state.formData.image, 
        liveSiteUrl: state.formData.liveSiteUrl, 
        githubUrl: state.formData.githubUrl, 
        category: state.formData.category, 
    }), shallow);

    const setFormDatas = useFormInputStore(state => state.setFormData);

    const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(title);
    }

    const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        e.preventDefault();

        const files = e.target.files;

        if (!files) {
            toast.error('이미지 업로드에 실패하였습니다.');
            return;
        }

        const file = files[0];

        if (file.type.includes('image')) {
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

    return (
        <form className='flex flex-col items-center justify-start w-full max-w-5xl pt-6 mx-auto text-lg lg:mt-14 mt-7 gap-9' onSubmit={handleSubmit}>
            <div className='flex justify-start items-center w-full lg:min-h-[190px] relative'>
                <label className='z-10 w-full p-20 text-center text-gray-100 border-2 border-dashed rounded-md border-gray-100/80' htmlFor='poster'>
                    {
                        image.length === 0 && 'Choose a poster for your article.'
                    }
                </label>
                <input 
                    id='image'
                    type='file'
                    accept='image/*'
                    required={type === 'create'}
                    onChange={handleChangeImage}
                />    
                {
                    image && (
                        <Image 
                            src={image}
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

            <CustomMenu 
                label='Category'
                filters={categoryFilters}
            />

            <button type='submit'>
                submit
            </button>
        </form>
    );
}

export default ArticleForm;