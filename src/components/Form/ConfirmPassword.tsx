import { useOutletContext } from "react-router-dom"
import tailwind from "../../styles/tailwind"
import type { TFormFunctions } from "../../types"

export default function ConfirmPassword() {

    const { register } = useOutletContext<TFormFunctions>()
    const { P2, inputStyle } = tailwind()

    return (
        <div className="flex flex-col gap-[4px]">
            <label htmlFor="confirmPassword" className={`${P2}`}>Confirm password</label>
            <input type="text" id="confirmPassword" className={`${inputStyle} bg-[url('/images/icon-password.svg')]`} {...register("confirmPassword")} placeholder="At least 8 characters" />   
        </div>)
}
