import tailwind from "../../styles/tailwind"
import CreatePassword from "./CreatePassword"
import EmailAddress from "./EmailAddress"
import RegisterFormBottomPart from "./RegisterFormBottomPart"
import ConfirmPassword from "./ConfirmPassword"
import { useOutletContext } from "react-router-dom"
import type { TFormFunctions } from "../../types"
export default function RegisterForm() {

    const { H1, P1 } = tailwind()

    const {watch} = useOutletContext<TFormFunctions>()

    return (
        <form action="" className="bg-[#FFFFFF] flex flex-col gap-[40px] p-[40px] rounded-[12px]">
            <div>
                <h1 className={`${H1}`}>Create account</h1>
                <h3 className={`${P1} text-[#737373]`}>Let’s get you started sharing your links!</h3>
            </div>
            <div className="flex flex-col gap-[24px]">

                <EmailAddress />

                <CreatePassword placeholder="At least 8 characters" validate={(value: string) => value.trim() !== "" && value === watch().confirmPassword ? true : "Please check again"} />

                <ConfirmPassword />

                <RegisterFormBottomPart />

            </div>
        </form >)
}
