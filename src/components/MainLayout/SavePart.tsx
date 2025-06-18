import { useState } from "react"
import tailwind from "../../styles/tailwind"
import type { TMainOutletContext } from "../../types"
import index from "../../utils"

export default function SavePart({ platformLinks, watch, image }: TMainOutletContext) {

    const { H2 } = tailwind()

    const { handleSave } = index({ platformLinks, watch, image })

    const [showMessage, setShowMessage] = useState(false)

    const triggerMessage = () => {
        setShowMessage(true)
        setTimeout(() => setShowMessage(false), 1000)
    }

    return (
        <div className="p-[24px] max-sm:w-[100%] bg-[#FFFFFF] flex justify-end items-center border-t-[1px] border-solid border-[#D9D9D9]">
            <button onClick={() => {
                handleSave()
                triggerMessage()
            }} className={`p-[11px_27px] max-sm:w-[100%] cursor-pointer bg-[rgba(99,60,255,0.25)] rounded-[8px] ${H2} text-[#FFFFFF] ${platformLinks!.length > 0 ? "bg-[rgba(99,60,255)]!" : ""}`}>
                Save
            </button>
            <div className={`absolute opacity-100 duration-1000 ${!showMessage ? "opacity-0!" : ""} transition-opacity p-[16px_24px] flex gap-[8px] max-sm:bottom-[-250px]! min-w-[350px] max-md:text-[1.2rem] left-1/2 -translate-x-1/2 z-10 bg-[#333333] ${H2} text-[#FAFAFA] rounded-[12px]`}>
                <img src="/images/icon-changes-saved.svg" alt="" />
                Your changes have been successfully saved!
            </div>
        </div>)
}
