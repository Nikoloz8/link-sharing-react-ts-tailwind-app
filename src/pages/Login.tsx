import { useEffect } from "react"
import LoginForm from "../components/Form/LoginForm"
import { useOutletContext } from "react-router-dom"
import type { TFormFunctions } from "../types"

export default function Login() {

    const { clearErrors } = useOutletContext<TFormFunctions>()

    useEffect(() => {
        clearErrors(["emailAddress", "createPassword", "confirmPassword"])
    }, [])

    return (
        <div className="flex flex-col gap-[50px] items-center p-[50px_0]">
            <img src="/images/logo-devlinks-large.svg" alt="" />
            <LoginForm />
        </div>
    )
}
