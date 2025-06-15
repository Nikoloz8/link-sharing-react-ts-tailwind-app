import tailwind from '../../styles/tailwind'
import { useOutletContext } from 'react-router-dom'
import type { TFormFunctions } from '../../types'

export default function CreatePassword({ placeholder }: { placeholder: string }) {

    const { errors, register, watch } = useOutletContext<TFormFunctions>()
    const { P2, inputStyle } = tailwind()


    return (
        <div className="flex flex-col gap-[4px]">
            <div className="flex justify-between">
                <label htmlFor="createPassword" className={`${P2}`}>Create password</label>
                {errors.createPassword ? <p className={`${P2} text-[#FF3939] relative top-[38px] right-[16px]`}>Please check again</p> : undefined}
            </div>
            <input type="text" id="createPassword" className={`${inputStyle} bg-[url('/images/icon-password.svg')] ${errors.createPassword ? "border-[#FF3939]" : undefined}`} {...register("createPassword", {
                required: "Please check again",
                validate: (value: string) => value.trim() !== "" && value === watch().confirmPassword || "Please check again"

            })} placeholder={placeholder} />
        </div>)
}
