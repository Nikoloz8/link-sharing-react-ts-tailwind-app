import { useLocation } from "react-router-dom"
import tailwind from "../../styles/tailwind"
import type { TMainOutletContext } from "../../types"
import RenderPlatformLinks from "./RenderPlatformLinks"

export default function Phone({ platformLinks, allMenuList, watch, image }: TMainOutletContext) {

    const { P2, H2 } = tailwind()

    const location = useLocation()

    const renderMissings = () => {
        if (location.pathname.includes("profileDetails") && platformLinks && allMenuList) {
            const missingCount = 5 - platformLinks.length;
            return <>
                {Array.from({ length: missingCount }).map((_e, i) => (<div key={i} className="w-full h-[50px] p-[16px] rounded-[8px] flex justify-between cursor-pointer bg-[#FFFFFF]"></div>))}
            </>
        }
    }

    return (
        <section className="w-[560px] min-w-[560px] h-[100%] rounded-[12px] bg-[#FFFFFF] bg-[url('/images/illustration-phone-mockup.svg')] bg-no-repeat relative bg-center">
            {watch().email || watch().firstName || watch().lastName || image ?
                <div className="flex flex-col gap-[25px] items-center absolute top-[164px] left-[180px] min-w-[200px]">
                    <img src={image ? String(image) : ""} className="w-[96px] h-[96px] rounded-[100%] border-[4px] border-solid border-[#633CFF]" alt="" />
                    <div className={`flex ${watch().email || watch().firstName || watch().lastName ? "flex" : "hidden"} flex-col gap-[8px] w-[100%] bg-[#FFFFFF] items-center justify-start min-h-[80px]`}>
                        <h2 className={`${H2} text-[1.8rem] `}>{watch().firstName} {watch().lastName}</h2>
                        <h3 className={`${P2} text-[1.4rem] text-[#737373]`}>{watch().email}</h3>
                    </div>
                </div> : ""}
            <div className="flex flex-col gap-[13px] absolute left-[161px] top-[379px] w-[237px]">
                <RenderPlatformLinks platformLinks={platformLinks} allMenuList={allMenuList} />
                {renderMissings()}
            </div>
        </section>)
}
