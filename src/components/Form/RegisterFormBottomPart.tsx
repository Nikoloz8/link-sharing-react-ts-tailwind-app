import { useNavigate, useOutletContext } from 'react-router-dom'
import tailwind from '../../styles/tailwind'
import type { TFormFunctions } from '../../types'
import index from '../../utils'

export default function RegisterFormBottomPart() {

    const { P2, signUpSignInButtonStyle, P1 } = tailwind()
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
            <button onClick={handleSubmit(onSubmit)} className={`${signUpSignInButtonStyle}`}>
                Create new account
            </button>
            <h4 className={`${P1} text-center text-[#737373] cursor-pointer`}>Already have an account? <a className="text-[#633CFF]" onClick={() => {
                navigate("/login")
                reset!()
            }}>Login</a></h4>
        </div >
    )
}
