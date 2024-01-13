import type { FormInputStoreType } from './types';
import { createWithEqualityFn } from 'zustand/traditional';
import { devtools } from 'zustand/middleware';

const useFormInputStore = createWithEqualityFn<FormInputStoreType>()(
    devtools(
        (set) => ({          
            formData: {
                title: '',
                description: '',
                image: '',
                liveSiteUrl: '',
                githubUrl: '',
                category: '',   
            },
            
            setFormData: (key, value) => set((state) => ({
                formData: {
                    ...state.formData,
                    [key]: value
                }
            }), false, 'SET_FORM_DATA')
        })
    )
);

export default useFormInputStore;