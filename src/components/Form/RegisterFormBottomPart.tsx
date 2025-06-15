import { useNavigate, useOutletContext } from 'react-router-dom'
import tailwind from '../../styles/tailwind'
import type { TFormFunctions } from '../../types'

export default function RegisterFormBottomPart() {


    const { P2, H2, P1 } = tailwind()
    const navigate = useNavigate()
    const { reset, watch, errors, handleSubmit } = useOutletContext<TFormFunctions>()

    const registerFunction = () => {
        const storedUsers = localStorage.getItem("99")

        if (!storedUsers) return

        const parsedStoredUsers = JSON.parse(storedUsers)
        parsedStoredUsers.push({ id: Math.floor(Math.random() * 100000), ...watch() })
        const stringedStoredUsers = JSON.stringify(parsedStoredUsers)
        localStorage.setItem("99", stringedStoredUsers)

    }


    const onSubmit = () => {
        console.log("hola")
        registerFunction()
        reset?.()
        navigate("/login")
    }

    console.log(errors)

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
