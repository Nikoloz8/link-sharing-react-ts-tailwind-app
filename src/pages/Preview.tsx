import { useNavigate } from "react-router-dom"
import tailwind from "../styles/tailwind"

export default function Preview() {

    const { H2 } = tailwind()

    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center h-[100%]">
            <div className="w-[100%] rounded-[0_0_32px_32px] h-[33vh] bg-[#633CFF] p-[24px]">
                <header className="flex bg-[#FFFFFF] items-center rounded-[12px] justify-between p-[16px]">
                    <button onClick={() => navigate("/main/links")} className={`p-[11px_27px] border-[1px] cursor-pointer border-solid border-[#633CFF] rounded-[8px] ${H2} text-[#633CFF]!`}>Back to Editor</button>
                    <button className={`p-[11px_27px] bg-[rgba(99,60,255)] rounded-[8px] ${H2} text-[#FFFFFF]`}>
                        Share Link
                    </button>
                </header>
            </div>
            <div className="p-[48px_56px] flex flex-col gap-[56px] rounded-[24px] bg-[#FFFFFF] shadow-[0_0_32px_0_rgba(0,0,0,0.1)]">

            </div>
        </div>
    )
}
