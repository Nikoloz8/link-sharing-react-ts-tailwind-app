import { useOutletContext } from "react-router-dom"
import tailwind from "../../styles/tailwind"
import type { TFormFunctions } from "../../types"
import EmailAddress from "./EmailAddress"
import CreatePassword from "./CreatePassword"
import LoginFormBottomPart from "./LoginFormBottomPart"

export default function LoginForm() {

    const { H1, P1 } = tailwind()
    const { handleSubmit, watch, setError } = useOutletContext<TFormFunctions>()

    const onSubmit = () => {
        if (watch().confirmPassword.trim() === "") {
            setError("createPassword", { message: "Please check again" })
        }
        if (watch().emailAddress.trim() === "") {
            setError("emailAddress", { message: "Can’t be empty" })
        }
    }

    return (
        <form action="" className="bg-[#FFFFFF] flex flex-col gap-[40px] p-[40px] rounded-[12px]" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <h1 className={`${H1}`}>Login</h1>
                <h3 className={`${P1} text-[#737373]`}>Add your details below to get back into the app</h3>
            </div>
            <div className="flex flex-col gap-[24px]">

                <EmailAddress />

                <CreatePassword placeholder="Enter your password" />

                <LoginFormBottomPart />
            </div>
        </form >)
}
