import { useNavigate, useOutletContext } from 'react-router-dom'
import tailwind from '../../styles/tailwind'
import type { TFormFunctions } from '../../types'
import index from '../../utils'

export default function RegisterFormBottomPart() {

    const { P2, H2, P1 } = tailwind()
    const navigate = useNavigate()
    const { reset, handleSubmit, watch } = useOutletContext<TFormFunctions>()

    const { handleRegister } = index({ watch })

    const onSubmit = () => {
        handleRegister()
        reset?.()
        navigate("/login")
    }

    return (
        <div className='flex flex-col gap-[24px]'>
            <p className={`${P2} text-[#737373]`}>Password must contains at least 8 characters</p>
            <button onClick={handleSubmit(onSubmit)} className={`w-[100%] hover:bg-[#BEADFF] shadow-[0_0_32px_0_rgba(99,60,255,0.25)] p-[11px_0] text-center cursor-pointer bg-[#633CFF] rounded-[8px] ${H2} text-[#FFFFFF]`}>
                Create new account
            </button>
            <h4 className={`${P1} text-center text-[#737373] cursor-pointer`}>Already have an account? <a className="text-[#633CFF]" onClick={() => {
                navigate("/login")
                reset!()
            }}>Login</a></h4>
        </div >
    )
}
