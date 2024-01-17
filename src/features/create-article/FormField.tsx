'use client';

import type { ChangeEvent, FC } from 'react';
import { memo } from 'react';
import useFormDatatStore from '@/zustand/FormStore/useFormDatatStore'

type Props = {
    type?: string;
    label: string;
    formKey: keyof Form;
    placeholder: string;
    isTextArea?: boolean;
}

const FormField: FC<Props> = ({ type, label, formKey, placeholder, isTextArea }) => {

    const value = useFormDatatStore(state => state.formData[formKey]);
    const setFormData = useFormDatatStore(state => state.setFormData);
    
    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData(formKey, e.target.value);
    }
    
    const className = 'w-full p-4 rounded-lg shadow-md outline-none bg-light-white-100 focus:bg-light-white-400';
    
    return (
        <div className='flex justify-start items-center flex-col w-full gap-2.5'>
            <label className='w-full '>
                <span className='font-extrabold text-gray-100'>
                    {label}
                </span>
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
                            onChange={handleChange}
                            value={value}
                            required={true}
                        />
                    )
                }
            </label>            
        </div>
    );
}

export default memo(FormField);