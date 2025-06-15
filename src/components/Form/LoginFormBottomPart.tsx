import { useNavigate, useOutletContext } from "react-router-dom"
import tailwind from "../../styles/tailwind"
import type { TFormFunctions } from "../../types"
import index from "../../utils"

export default function LoginFormBottomPart() {

    const { P1, signUpSignInButtonStyle } = tailwind()
    const navigate = useNavigate()
    const { reset, handleSubmit, watch } = useOutletContext<TFormFunctions>()

    const { handleLogin } = index({ watch, reset })

    return (
        <div className='flex flex-col gap-[24px]'>
            <button onClick={handleSubmit(handleLogin)} className={`${signUpSignInButtonStyle}`}>
                Login
            </button>
            <h4 className={`${P1} text-center text-[#737373] cursor-pointer`}>Don’t have an account? <a className="text-[#633CFF]" onClick={() => {
                navigate("/register")
                reset!()
            }}>Create account</a></h4>
        </div>)
}
