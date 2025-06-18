import tailwind from "../../styles/tailwind"
import type { TMainOutletContext } from "../../types"
import index from "../../utils"

export default function SavePart({ platformLinks, watch, image }: TMainOutletContext) {

    const { H2 } = tailwind()

    const { handleSave } = index({ platformLinks, watch, image })

    return (
        <div className="p-[24px] flex justify-end items-center border-t-[1px] border-solid border-[#D9D9D9] ">
            <button onClick={handleSave} className={`p-[11px_27px] cursor-pointer bg-[rgba(99,60,255,0.25)] rounded-[8px] ${H2} text-[#FFFFFF] ${platformLinks!.length > 0 ? "bg-[rgba(99,60,255)]!" : ""}`}>
                Save
            </button>
        </div>)
}
