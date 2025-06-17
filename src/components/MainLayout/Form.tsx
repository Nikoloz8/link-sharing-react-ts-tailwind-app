import { useOutletContext } from "react-router-dom"
import type { TMainOutletContext } from "../../types"
import tailwind from "../../styles/tailwind"

export default function Form() {

    const { register } = useOutletContext<TMainOutletContext>()
    const { inputStyle, P2 } = tailwind()

    return (
        <div className="flex p-[20px] justify-between items-center rounded-[12px] bg-[#FAFAFA] ">
            <form className="w-[100%] flex flex-col gap-[12px]" action="">
                <div className="flex items-center justify-between w-[100%]!">
                    <label className={`${P2} text-[#737373]`} htmlFor="firstname">First name*</label>
                    <input type="text" id="firstname" placeholder="e.g. John" className={`${inputStyle} p-[12px_16px]!`} {...register("firstName")} />
                </div>
                <div className="flex items-center justify-between w-[100%]!">
                    <label className={`${P2} text-[#737373]`} htmlFor="lastname">Last name*</label>
                    <input type="text" id="lastname" placeholder="e.g. Appleseed" className={`${inputStyle} p-[12px_16px]!`} {...register("lastName")} />
                </div>
                <div className="flex items-center justify-between w-[100%]!">
                    <label className={`${P2} text-[#737373]`} htmlFor="email">Email</label>
                    <input type="text" id="email" placeholder="e.g. email@example.com" className={`${inputStyle} p-[12px_16px]!`}  {...register("email")} />
                </div>
            </form>
        </div>)
}
