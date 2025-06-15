import { useForm } from "react-hook-form"
import tailwind from "../styles/tailwind"

export default function Register() {

    const { register, watch, setError, handleSubmit, formState: { errors } } = useForm({
        defaultValues: {
            emailAddress: "",
            createPassword: "",
            confirmPassword: ""
        }
    })

    console.log(watch())

    console.log(errors)

    const { H1, P1, P2, H2, inputStyle } = tailwind()

    const onSubmit = () => {
        if (watch().createPassword !== watch().confirmPassword || watch().confirmPassword.trim() === "") {
            setError("createPassword", { message: "Please check again" })
        }
        if (watch().emailAddress.trim() === "") {
            setError("emailAddress", { message: "Can’t be empty" })
        }
    }

    return (
        <div className="flex flex-col gap-[50px] items-center">
            <img src="/images/logo-devlinks-large.svg" alt="" />
            <form action="" className="bg-[#FFFFFF] flex flex-col gap-[40px] p-[40px] rounded-[12px]" onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <h1 className={`${H1}`}>Create account</h1>
                    <h3 className={`${P1} text-[#737373]`}>Let’s get you started sharing your links!</h3>
                </div>
                <div className="flex flex-col gap-[24px]">
                    <div className="flex flex-col gap-[4px]">
                        <div className="flex justify-between">
                            <label htmlFor="email" className={`${P2}`}>Email address</label>
                            {errors.emailAddress ? <p className={`${P2} text-[#FF3939] relative top-[38px] right-[16px]`}>Can’t be empty</p> : undefined}
                        </div>
                        <input type="text" id="email" className={`${inputStyle} bg-[url('/images/icon-email.svg')] ${errors.emailAddress ? "border-[#FF3939]" : undefined}`} {...register("emailAddress")} placeholder="e.g. alex@email.com" />
                    </div>
                    <div className="flex flex-col gap-[4px]">
                        <div className="flex justify-between">
                            <label htmlFor="createPassword" className={`${P2}`}>Create password</label>
                            {errors.createPassword ? <p className={`${P2} text-[#FF3939] relative top-[38px] right-[16px]`}>Please check again</p> : undefined}
                        </div>
                        <input type="text" id="createPassword" className={`${inputStyle} bg-[url('/images/icon-password.svg')] ${errors.createPassword ? "border-[#FF3939]" : undefined}`} {...register("createPassword")} placeholder="At least 8 characters" />
                    </div>
                    <div className="flex flex-col gap-[4px]">
                        <label htmlFor="confirmPassword" className={`${P2}`}>Confirm password</label>
                        <input type="text" id="confirmPassword" className={`${inputStyle} bg-[url('/images/icon-password.svg')]`} {...register("confirmPassword")} placeholder="At least 8 characters" />
                    </div>
                    <p className={`${P2} text-[#737373]`}>Password must contains at least 8 characters</p>
                    <button className={`w-[100%] p-[11px_0] text-center cursor-pointer bg-[#633CFF] rounded-[8px] ${H2} text-[#FFFFFF]`}>
                        Create new account
                    </button>
                    <h4 className={`${P1} text-center text-[#737373]`}>Already have an account? <a className="text-[#633CFF]">Login</a></h4>
                </div>
            </form>
        </div>
    )
}
