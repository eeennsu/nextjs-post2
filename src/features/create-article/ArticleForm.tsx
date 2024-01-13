'use client';

import type { FC, ChangeEvent, FormEvent } from 'react';
import type { NewSession } from '@/lib/session';
import { memo } from 'react';
import { shallow } from 'zustand/shallow';
import Image from 'next/image';
import FormField from './FormField';
import useFormInputStore from '@/zustand/FormStore/useFormInputStore';

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
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        console.log(title);
    }

    const handleChangeImage = (e: ChangeEvent<HTMLInputElement>) => {
        setFormDatas('image', e.target.value);
    }

    return (
        <form className='flex justify-start items-center flex-col w-full lg:mt-14 mt-7 pt-6 gap-11 text-lg max-w-5xl mx-auto' onSubmit={handleSubmit}>
            <div className='flex justify-start items-center w-full lg:min-h-[190px] relative'>
                <label className='z-10 text-center w-full p-20 text-gray-100 border-2 border-gray-100/80 border-dashed rounded-md' htmlFor='poster'>
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
                            className='sm:p-10 object-contain z-20'
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
            <button type='submit'>
                submit
            </button>
        </form>
    );
}

export default ArticleForm;