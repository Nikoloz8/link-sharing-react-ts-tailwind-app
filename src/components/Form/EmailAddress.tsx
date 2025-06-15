import { useOutletContext } from "react-router-dom"
import tailwind from "../../styles/tailwind"

export default function EmailAddress() {

    const { errors, register } = useOutletContext<TFormFunctions>()
    const { P2, inputStyle } = tailwind()

    return (
        <div className="flex flex-col gap-[4px]">
            <div className="flex justify-between">
                <label htmlFor="email" className={`${P2}`}>Email address</label>
                {errors.emailAddress ? <p className={`${P2} text-[#FF3939] elative top-[38px] right-[16px]`}>Can’t be empty</p> : undefined}
            </div>
            <input type="text" id="email" className={`${inputStyle} bg-[url('/images/icon-email.svg')] ${errors.emailAddress ? "border-[#FF3939]" : undefined}`} {...register("emailAddress")} placeholder="e.g. alex@email.com" />
        </div>)
}
