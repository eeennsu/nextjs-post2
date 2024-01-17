export type FormDataStoreType = {
    formData: Form;
    setFormData: (key: keyof Form, value: string) => void;

    allSetFormData: (existForm: Form) => void;
    resetFormData: () => void;
}