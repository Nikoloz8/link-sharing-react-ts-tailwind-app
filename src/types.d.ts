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
    reset?: UseFormReset<TForm>

    platformLinks: {
        selected: number;
        link: string;
        showDropdown: boolean;
    }[]

}>

type TMainOutletContext = Partial<{
    allMenuList: ({
        platform: string;
        img: string;
        bg: string;
        textColor?: undefined;
        border?: undefined;
    } | {
        platform: string;
        img: string;
        bg: string;
        textColor: string;
        border: string;
    })[]

    platformLinks: {
        selected: number;
        link: string;
        showDropdown: boolean;
    }[]

    setPlatformLinks: React.Dispatch<React.SetStateAction<{
        selected: number;
        link: string;
        showDropdown: boolean;
    }[]>>

    register: UseFormRegister<{
        firstName: string;
        lastName: string;
        email: string;
    }>

    watch: UseFormWatch<{
        firstName: string;
        lastName: string;
        email: string;
    }>

    setImage: React.Dispatch<React.SetStateAction<string | null>>
    image: string
}>