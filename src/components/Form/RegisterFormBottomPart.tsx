import tailwind from '../../styles/tailwind'

export default function RegisterFormBottomPart() {


    const { P2, H2, P1 } = tailwind()

    return (
        <div className='flex flex-col gap-[24px]'>
            <p className={`${P2} text-[#737373]`}>Password must contains at least 8 characters</p>
            <button className={`w-[100%] p-[11px_0] text-center cursor-pointer bg-[#633CFF] rounded-[8px] ${H2} text-[#FFFFFF]`}>
                Create new account
            </button>
            <h4 className={`${P1} text-center text-[#737373]`}>Already have an account? <a className="text-[#633CFF]">Login</a></h4>
        </div>
    )
}
