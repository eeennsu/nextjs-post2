'use client';

import type { ChangeEvent, FC } from 'react';
import type { Form } from '@/types/article.types';
import { memo } from 'react';
import useFormInputStore from '@/zustand/FormStore/useFormInputStore'

type Props = {
    type?: string;
    label: string;
    formKey: keyof Form;
    placeholder: string;
    isTextArea?: boolean;
}

const FormField: FC<Props> = ({ type, label, formKey, placeholder, isTextArea }) => {

    const value = useFormInputStore(state => state.formData[formKey]);
    const setFormData = useFormInputStore(state => state.setFormData);
    
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(formKey, e.target.value);
    }
    
    const className = 'w-full outline-none bg-light-white-100 rounded-lg p-4 focus:bg-light-white-400 shadow-md';
    
    return (
        <div className='flex justify-start items-center flex-col w-full gap-1.5'>
            <label className='w-full text-gray-100 font-extrabold'>
                {label}
                {
                    isTextArea ? (
                        <textarea
                            className={className + ' resize-none'}
                            placeholder={placeholder}
                            value={value}
                            onChange={handleChange}
                            rows={4}
                        />
                    ) : (
                        <input
                            className={className}
                            type={type ? type : 'text'}
                            placeholder={placeholder}
                            value={value}
                            onChange={handleChange}
                        />
                    )
                }
            </label>
            
        </div>
    );
}

export default memo(FormField);