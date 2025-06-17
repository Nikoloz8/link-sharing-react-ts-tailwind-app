import type { TMainOutletContext } from "../../types"
import tailwind from "../../styles/tailwind"

export default function RenderPlatformLinks({ platformLinks, allMenuList }: TMainOutletContext) {

    const { P2 } = tailwind()

    return platformLinks?.map((e, i) => {
        return allMenuList ? <a key={i} href={e.link}>
            <button className={`w-[100%] p-[16px] rounded-[8px] flex justify-between cursor-pointer ${allMenuList[e.selected].border}`} style={{ backgroundColor: allMenuList[e.selected].bg }}>
                <div className={`flex gap-[8px] items-center text-[#FFFFFF] ${P2}`} style={{ color: allMenuList[e.selected].textColor }}>
                    <img src={allMenuList[e.selected].img} alt="" />
                    {allMenuList[e.selected].platform}
                </div>
                <img src="/images/icon-arrow-right.svg" alt="" />
            </button>
        </a> : undefined
    })
}

