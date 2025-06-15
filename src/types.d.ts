import type { UseFormReset } from "react-hook-form";

type TForm = Partial<{
    emailAddress?: string;
    createPassword?: string;
    confirmPassword?: string;
}>

type TFormFunctions = Partial<{
    register?: UseFormRegister<TForm>
    watch?: UseFormWatch<TForm>
    setError?: UseFormSetError<TForm>
    handleSubmit?: UseFormHandleSubmit<TForm, TForm>
    errors?: FieldErrors<TForm>
    reset?: UseFormReset<TForm>
    clearErrors: UseFormClearErrors<TForm>
}>

type TFunctions = Partial<{
    watch?: UseFormWatch<TForm>
    setError?: UseFormSetError<TForm>
}>