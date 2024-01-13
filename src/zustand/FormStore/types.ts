import type { Form } from '@/types/article.types';

export type FormInputStoreType = {
    formData: Form;
    setFormData: (key: keyof Form, value: string) => void;
}