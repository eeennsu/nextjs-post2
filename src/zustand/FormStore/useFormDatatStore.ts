import type { FormDataStoreType } from './types';
import { createWithEqualityFn } from 'zustand/traditional';
import { devtools } from 'zustand/middleware';

const useFormDatatStore = createWithEqualityFn<FormDataStoreType>()(
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

export default useFormDatatStore;