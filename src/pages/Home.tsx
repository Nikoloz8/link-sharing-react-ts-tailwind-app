import { useState } from "react"
import tailwind from "../styles/tailwind"

export default function Home() {

  const { H2, H1, P1, P2, inputStyle } = tailwind()

  const allMenuList = [{ platform: "GitHub", img: "/images/icon-github.svg", bg: "#1A1A1A" }, { platform: "Frontend Mentor", img: "/images/icon-frontend-mentor.svg", bg: "#FFFFFF", textColor: "#333333", border: "border-[1px] border-solid border-[#D9D9D9]" }, { platform: "Twitter", img: "/images/icon-twitter.svg", bg: "#43B7E9" }, { platform: "LinkedIn", img: "/images/icon-linkedin.svg", bg: "#2D68FF" }, { platform: "YouTube", img: "/images/icon-youtube.svg", bg: "#EE3939" }, { platform: "Facebook", img: "/images/icon-facebook.svg", bg: "#2442AC" }, { platform: "Twitch", img: "/images/icon-twitch.svg", bg: "#EE3FC8" }, { platform: "Dev.to", img: "/images/icon-devto.svg", bg: "#333333" }, { platform: "Codewars", img: "/images/icon-codewars.svg", bg: "#8A1A50" }, { platform: "Codepen", img: "/images/icon-codepen.svg", bg: "#131417" }, { platform: "freeCodeCamp", img: "/images/icon-freecodecamp.svg", bg: "#302267" }, { platform: "GitLab", img: "/images/icon-gitlab.svg", bg: "#EB4925" }, { platform: "Hashnode", img: "/images/icon-hashnode.svg", bg: "#0330D1" }, { platform: "Stack Overflow", img: "/images/icon-stack-overflow.svg", bg: "#EC7100" }]

  const [platformLinks, setPlatformLinks] = useState<{ selected: number, link: string, showDropdown: boolean }[]>([])

  return (
    <div className="w-[100%] min-h-[100vh] p-[24px] flex flex-col gap-[24px]">
      <header className="flex w-[100%] bg-[#FFFFFF] p-[16px] items-center justify-between rounded-[12px]">
        <img src="/images/logo-devlinks-large.svg" className="h-[32px]" alt="" />
        <div className="flex gap-[16px] items-center">
          <button className={`flex p-[13px_27px] rounded-[8px] ${H2} items-center gap-[8px] text-[#737373]`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" viewBox="0 0 16 16"><path fill="#737373" d="M8.523 11.72a.749.749 0 0 1 0 1.063l-.371.371A3.751 3.751 0 1 1 2.847 7.85l1.507-1.506A3.75 3.75 0 0 1 9.5 6.188a.753.753 0 0 1-1 1.125 2.25 2.25 0 0 0-3.086.091L3.908 8.91a2.25 2.25 0 0 0 3.183 3.183l.37-.371a.748.748 0 0 1 1.062 0Zm4.63-8.874a3.756 3.756 0 0 0-5.305 0l-.371.37A.751.751 0 1 0 8.539 4.28l.372-.37a2.25 2.25 0 0 1 3.182 3.182l-1.507 1.507a2.25 2.25 0 0 1-3.086.09.753.753 0 0 0-1 1.125 3.75 3.75 0 0 0 5.144-.152l1.507-1.507a3.756 3.756 0 0 0 .002-5.307v-.001Z" /></svg>
            Links
          </button>
          <button className={`flex p-[13px_27px] rounded-[8px] ${H2} items-center gap-[8px] text-[#737373]`}>
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><path fill="#737373" d="M10.5 1.563A8.437 8.437 0 1 0 18.938 10 8.447 8.447 0 0 0 10.5 1.562ZM6.716 15.357a4.688 4.688 0 0 1 7.568 0 6.54 6.54 0 0 1-7.568 0Zm1.596-5.982a2.188 2.188 0 1 1 4.376 0 2.188 2.188 0 0 1-4.376 0Zm7.344 4.683a6.523 6.523 0 0 0-2.265-1.83 4.062 4.062 0 1 0-5.782 0 6.522 6.522 0 0 0-2.265 1.83 6.562 6.562 0 1 1 10.304 0h.008Z" /></svg>
            Profile Details
          </button>
        </div>
        <button className={`p-[11px_27px] rounded-[8px] border-[1px] border-solid border-[#633CFF] ${H2} text-[#633CFF]!`}>
          Preview
        </button>
      </header>
      <main className="flex gap-[24px] h-[834px]">
        <section className="w-[560px] min-w-[560px] h-[100%] rounded-[12px] bg-[#FFFFFF] bg-[url('/images/illustration-phone-mockup.svg')] bg-no-repeat relative bg-center">
          <div className="flex flex-col gap-[14px] absolute left-[161px] top-[379px] w-[237px]">
            {platformLinks.map((e, i) => {
              return <a key={i} href={e.link}>
                <button className={`w-[100%] p-[16px] rounded-[8px] flex justify-between cursor-pointer ${allMenuList[e.selected].border}`} style={{ backgroundColor: allMenuList[e.selected].bg }}>
                  <div className={`flex gap-[8px] items-center text-[#FFFFFF] ${P2}`} style={{ color: allMenuList[e.selected].textColor }}>
                    <img src={allMenuList[e.selected].img} alt="" />
                    {allMenuList[e.selected].platform}
                  </div>
                  <img src="/images/icon-arrow-right.svg" alt="" />
                </button>
              </a>
            })}
          </div>
        </section>
        <section className="w-[100%] h-[100%] pt-[40px] flex bg-[#FFFFFF] rounded-[12px] flex-col justify-between">
          <div className="flex flex-col gap-[40px]">
            <div className="flex flex-col gap-[8px] p-[0_40px]!">
              <h1 className={`${H1}`}>Customize your links</h1>
              <p className={`${P1}`}>Add/edit/remove links below and then share all your profiles with the world!</p>
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
              }} className={`w-[100%] p-[11px_0] text-center cursor-pointer ${H2} text-[#633CFF]! border-[1px] border-solid border-[#633CFF]! rounded-[8px]`}>+ Add new link</button>
              {platformLinks.length !== 0 ? <div className="flex flex-col gap-[24px] overflow-y-scroll h-[510px] pb-[24px]">
                {platformLinks.map((e, i) => {
                  return <div key={i} className="bg-[#FAFAFA] rounded-[12px] flex flex-col gap-[12px] p-[20px]">
                    <div className="w-[100%] flex  justify-between">
                      <div className="flex gap-[8px] items-center">
                        <div className="flex flex-col gap-[4px]">
                          <span className="w-[12px] h-[1px] bg-[#737373]"></span>
                          <span className="w-[12px] h-[1px] bg-[#737373]"></span>
                        </div>
                        <h3 className={`${H2} text-[#737373]`}>Link #{i + 1}</h3>
                      </div>
                      <button className={`${P1} text-[#737373] cursor-pointer`} onClick={() => {
                        setPlatformLinks(platformLinks.filter((_e, index) => i !== index))
                      }}>Remove</button>
                    </div>
                    <div className="flex flex-col gap-[4px]">
                      <label className={`${P2}`}>Platform</label>
                      <div onClick={() => {
                        setPlatformLinks(prevLinks => prevLinks.map((link, index) => index === i ? { ...link, showDropdown: !link.showDropdown } : link))
                      }} className={`flex w-[100%] bg-[#FFFFFF] justify-between p-[12px_16px] rounded-[8px] border-[1px] relative border-solid items-center border-[#D9D9D9] ${platformLinks[i].showDropdown ? "border-[#633CFF]! shadow-[0_0_32px_0_rgba(99,60,255,0.25)]" : ""}`}>
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
              </div>}
            </div>
          </div>
          <div className="p-[24px] flex justify-end items-center border-t-[1px] border-solid border-[#D9D9D9] ">
            <button className={`p-[11px_27px] bg-[rgba(99,60,255,0.25)] rounded-[8px] ${H2} text-[#FFFFFF]`}>
              Save
            </button>
          </div>
        </section>
      </main>
    </div >
  )
}
