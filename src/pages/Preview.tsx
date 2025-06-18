import { useNavigate } from "react-router-dom"
import tailwind from "../styles/tailwind"
import type { TMainOutletContext } from "../types"
import RenderPlatformLinks from "../components/MainLayout/RenderPlatformLinks"

export default function Preview({ allMenuList, platformLinks, image, watch }: TMainOutletContext) {

    const { H2, H1, P1 } = tailwind()

    const navigate = useNavigate()

    return (
        <div className="flex flex-col items-center h-[100%]">
            <div className="w-[100%] rounded-[0_0_32px_32px] h-[40vh] max-sm:bg-[#FFFFFF] max-sm:p-[16px_24px] bg-[#633CFF] p-[24px]">
                <header className="flex bg-[#FFFFFF] max-sm:p-0 items-center rounded-[12px] justify-between p-[16px]">
                    <button onClick={() => navigate("/main/links")} className={`p-[11px_27px] border-[1px] cursor-pointer border-solid border-[#633CFF] rounded-[8px] ${H2} text-[#633CFF]!`}>Back to Editor</button>
                    <button className={`p-[11px_27px] bg-[rgba(99,60,255)] rounded-[8px] ${H2} text-[#FFFFFF]`}>
                        Share Link
                    </button>
                </header>
            </div>
            <div className="p-[48px_56px] flex flex-col gap-[56px] rounded-[24px] mb-[50px] bg-[#FFFFFF] shadow-[0_0_32px_0_rgba(0,0,0,0.1)] mt-[-150px]">
                <div className="flex flex-col gap-[25px] items-center">
                    <img src={image} className="w-[104px] h-[104px] rounded-[100%] border-[4px] border-solid border-[#633CFF]" alt="" />
                    <div className="flex flex-col gap-[8px] items-center">
                        <h1 className={`${H1}`}>{watch().firstName} {watch().lastName}</h1>
                        <h3 className={`${P1} text-[#737373]`}>{watch().email}</h3>
                    </div>
                </div>
                <div className="flex flex-col gap-[20px] min-w-[237px]!">
                    <RenderPlatformLinks allMenuList={allMenuList} platformLinks={platformLinks} />
                </div>
            </div>
        </div>
    )
}
