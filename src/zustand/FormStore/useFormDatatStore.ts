import type { FormDataStoreType } from './types';
import { createWithEqualityFn } from 'zustand/traditional';
import { devtools } from 'zustand/middleware';

const initFormData: Form = {
    title: '',
    description: '',
    image: '',
    liveSiteUrl: '',
    githubUrl: '',
    category: '',
};

const useFormDatatStore = createWithEqualityFn<FormDataStoreType>()(
    devtools(
        (set) => ({          
            formData: initFormData,
            
            setFormData: (key, value) => set((state) => ({
                formData: {
                    ...state.formData,
                    [key]: value
                }
            }), false, 'SET_FORM_DATA'),

            resetFormData: () => set(() => ({ formData: initFormData }), false, 'RESET_FORM_DATA')
        })
    )
);

export default useFormDatatStore;