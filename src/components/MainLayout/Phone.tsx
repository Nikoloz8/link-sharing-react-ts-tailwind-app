import { useLocation } from "react-router-dom"
import tailwind from "../../styles/tailwind"
import type { TMainOutletContext } from "../../types"

export default function Phone({ platformLinks, allMenuList, watch }: TMainOutletContext) {

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
    
    console.log(watch().lastName)

    return (
        <section className="w-[560px] min-w-[560px] h-[100%] rounded-[12px] bg-[#FFFFFF] bg-[url('/images/illustration-phone-mockup.svg')] bg-no-repeat relative bg-center">
            {watch().email || watch().firstName || watch().lastName ?
                <div className="flex flex-col gap-[25px] absolute top-[250px] left-[180px]">
                    <img src="" alt="" />
                    <div className="flex flex-col gap-[8px] min-w-[200px] bg-[#FFFFFF] items-center justify-center">
                        <h2 className={`${H2} text-[1.8rem] `}>{watch().firstName} {watch().lastName}</h2>
                        <h3 className={`${P2} text-[1.4rem] text-[#737373]`}>{watch().email}</h3>
                    </div>
                </div> : ""}
            <div className="flex flex-col gap-[13px] absolute left-[161px] top-[379px] w-[237px]">
                {platformLinks?.map((e, i) => {
                    return allMenuList ? <a key={i} href={e.link}>
                        <button className={`w-[100%] p-[16px] rounded-[8px] flex justify-between cursor-pointer ${allMenuList[e.selected].border}`} style={{ backgroundColor: allMenuList[e.selected].bg }}>
                            <div className={`flex gap-[8px] items-center text-[#FFFFFF] ${P2}`} style={{ color: allMenuList[e.selected].textColor }}>
                                <img src={allMenuList[e.selected].img} alt="" />
                                {allMenuList[e.selected].platform}
                            </div>
                            <img src="/images/icon-arrow-right.svg" alt="" />
                        </button>
                    </a> : undefined
                })}
                {renderMissings()}
            </div>
        </section>)
}
