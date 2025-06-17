import tailwind from "../../styles/tailwind"

export default function SavePart() {

    const { H2 } = tailwind()

    return (
        <div className="p-[24px] flex justify-end items-center border-t-[1px] border-solid border-[#D9D9D9] ">
            <button className={`p-[11px_27px] bg-[rgba(99,60,255,0.25)] rounded-[8px] ${H2} text-[#FFFFFF]`}>
                Save
            </button>
        </div>)
}
