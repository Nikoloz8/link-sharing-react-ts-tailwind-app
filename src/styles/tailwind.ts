export default function tailwind() {

    const H1 = "text-[3.2rem] max-sm:text-[2.4rem]! font-[700] text-[#333333] leading-[150%]"
    const H2 = "text-[1.6rem] font-[600] text-[#333333] leading-[150%]"
    const P1 = "text-[1.6rem] font-[400] text-[#333333] leading-[150%]"
    const P2 = "text-[1.2rem] font-[400] text-[#333333] leading-[150%]"
    const inputStyle = `w-[400px] max-sm:w-[100%] bg-[#FFFFFF] p-[12px_16px_12px_44px] bg-no-repeat bg-[16px_center] outline-none rounded-[8px] border-[1px] boder-solid border-[#D9D9D9] focus:border-[#633CFF] focus:shadow-[0_0_32px_0_rgba(99,60,255,0.25)] ${P1}`
    const signUpSignInButtonStyle = `w-[100%] hover:bg-[#BEADFF] shadow-[0_0_32px_0_rgba(99,60,255,0.25)] p-[11px_0] text-center cursor-pointer bg-[#633CFF] rounded-[8px] ${H2} text-[#FFFFFF]`

    return { H1, H2, P1, P2, inputStyle, signUpSignInButtonStyle }
}
