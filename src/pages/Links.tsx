import { useOutletContext } from "react-router-dom"
import tailwind from "../styles/tailwind"
import type { TMainOutletContext } from "../types"
import RenderLinksInputs from "../components/MainLayout/RenderLinksInputs"

export default function Links() {

  const { H2, H1, P1 } = tailwind()
  const { platformLinks, setPlatformLinks, allMenuList } = useOutletContext<TMainOutletContext>()

  if (setPlatformLinks && platformLinks && allMenuList) {
    return (
      <>
        <div className="flex flex-col gap-[40px]">
          <div className="flex flex-col gap-[8px] p-[0_40px]!">
            <h1 className={`${H1}`}>Customize your links</h1>
            <p className={`${P1} text-[#737373]`}>Add/edit/remove links below and then share all your profiles with the world!</p>
          </div>
          <div className="flex flex-col gap-[24px] p-[0_40px]!">
            <button onClick={() => {
              if (platformLinks.length < 5) {
                setPlatformLinks([...platformLinks, {
                  selected: 0,
                  link: "",
                  showDropdown: false
                }])
              }
            }} className={`w-[100%] p-[11px_0] text-center cursor-pointer ${H2} text-[#633CFF]! border-[1px] border-solid border-[#633CFF]! rounded-[8px] hover:bg-[#EFEBFF]`}>+ Add new link</button>

            <RenderLinksInputs />

          </div>
        </div>
      </>
    )
  }
}

