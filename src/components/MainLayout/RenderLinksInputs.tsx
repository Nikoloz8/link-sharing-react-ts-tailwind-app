import { useOutletContext } from 'react-router-dom'
import type { TMainOutletContext, TPlatformLink } from '../../types'
import tailwind from '../../styles/tailwind'

export default function RenderLinksInputs() {

    const { setPlatformLinks, allMenuList, platformLinks } = useOutletContext<TMainOutletContext>()

    const { H2, P1, P2, H1, inputStyle } = tailwind()

    if (platformLinks && setPlatformLinks && allMenuList) {
        return (platformLinks.length !== 0 ? <div className="flex flex-col gap-[24px] overflow-y-scroll h-[510px] pb-[24px]">
            {platformLinks.map((e: TPlatformLink, i: number) => {
                return <div key={i} className="bg-[#FAFAFA] rounded-[12px] flex flex-col gap-[12px] p-[20px]">
                    <div className="w-[100%] flex justify-between">
                        <div className="flex gap-[8px] items-center">
                            <img src="/images/icon-drag-and-drop.svg" alt="" />
                            <h3 className={`${H2} text-[#737373]`}>Link #{i + 1}</h3>
                        </div>
                        <button className={`${P1} text-[#737373] cursor-pointer`} onClick={() => {
                            setPlatformLinks(platformLinks.filter((_e: TPlatformLink, index: number) => i !== index))
                        }}>Remove</button>
                    </div>
                    <div className="flex flex-col gap-[4px]">
                        <label className={`${P2}`}>Platform</label>
                        <div onClick={() => {
                            setPlatformLinks(prevLinks => prevLinks.map((link, index) => index === i ? { ...link, showDropdown: !link.showDropdown } : link))
                        }} className={`flex w-[100%] bg-[#FFFFFF] justify-between p-[12px_16px] rounded-[8px] border-[1px] cursor-pointer relative border-solid items-center border-[#D9D9D9] ${platformLinks[i].showDropdown ? "border-[#633CFF]! shadow-[0_0_32px_0_rgba(99,60,255,0.25)]" : ""}`}>
                            <div className={`flex items-center gap-[12px] ${P1}`}>
                                <img src={allMenuList[e.selected].img} alt="" />
                                {allMenuList[e.selected].platform}
                            </div>
                            <img src="/images/icon-chevron-down.svg" className={`${!platformLinks[i].showDropdown ? "rotate-0" : "rotate-180"} duration-500 transition-all`} alt="" />
                            <div className={`${!platformLinks[i].showDropdown ? "hidden" : "flex"} absolute w-[100%] p-[0_16px] flex-col bg-[#FFFFFF] rounded-[8px] border-[1px] border-solid border-[#D9D9D9] z-10 top-[64px] right-0`}>
                                {allMenuList.map((e, ind) => {
                                    return <button onClick={() => {
                                        const newLinks = [...platformLinks]
                                        newLinks[i] = { ...newLinks[i], selected: ind }
                                        setPlatformLinks(newLinks)
                                    }} key={ind} className={`w-[100%] flex gap-[14px] p-[12px_0] border-b-[1px] border-solid border-[#D9D9D9] ${P1} cursor-pointer`}>
                                        <img src={e.img} alt="" />
                                        {e.platform}
                                    </button>
                                })}
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-[4px]">
                        <label htmlFor={`link${i}`} className={`${P2}`}>Link</label>
                        <input type="text" onChange={(e) => {
                            const newLinks = [...platformLinks]
                            newLinks[i] = { ...newLinks[i], link: e.target.value }
                            setPlatformLinks(newLinks)
                        }} className={`${inputStyle} w-[100%]! bg-[url('/images/icon-link.svg')]`} id={`link${i}`} placeholder="e.g. https://www.github.com/johnappleseed" />
                    </div>
                </div>
            })}
        </div> : <div className="w-[100%] p-[62.5px_20px] rounded-[12px] bg-[#FAFAFA] flex flex-col items-center gap-[40px]">
            <img src="/images/illustration-empty.svg" alt="" />
            <div className="flex flex-col gap-[24px] items-center max-w-[500px]">
                <h1 className={`${H1}`}>Let’s get you started</h1>
                <p className={`${P1} text-[#737373] text-center`}>
                    Use the “Add new link” button to get started. Once you have more than one link, you can reorder and edit them. We’re here to help you share your profiles with everyone!
                </p>
            </div>
        </div>
        )

    }


}
