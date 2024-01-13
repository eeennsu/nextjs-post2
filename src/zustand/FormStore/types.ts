export type FormDataStoreType = {
    formData: Form;
    setFormData: (key: keyof Form, value: string) => void;
}