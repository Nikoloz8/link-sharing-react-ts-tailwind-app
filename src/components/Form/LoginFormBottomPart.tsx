import { useNavigate, useOutletContext } from "react-router-dom"
import tailwind from "../../styles/tailwind"
import type { TFormFunctions } from "../../types"

export default function LoginFormBottomPart() {

    const { H2, P1 } = tailwind()
    const navigate = useNavigate()
    const {reset} = useOutletContext<TFormFunctions>()

    return (
        <div className='flex flex-col gap-[24px]'>
            <button className={`w-[100%] hover:bg-[#BEADFF] shadow-[0_0_32px_0_rgba(99,60,255,0.25)] p-[11px_0] text-center cursor-pointer bg-[#633CFF] rounded-[8px] ${H2} text-[#FFFFFF]`}>
                Login
            </button>
            <h4 className={`${P1} text-center text-[#737373] cursor-pointer`}>Don’t have an account? <a className="text-[#633CFF]" onClick={() => {
                navigate("/register")
                reset!()
                }}>Create account</a></h4>
        </div>)
}
