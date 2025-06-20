import { Outlet, useLocation } from "react-router-dom"
import Header from "../components/MainLayout/Header"
import { useEffect, useState } from "react"
import Phone from "../components/MainLayout/Phone"
import SavePart from "../components/MainLayout/SavePart"
import { useForm } from "react-hook-form"
import Preview from "../pages/Preview"

export default function MainLayout() {

    const allMenuList = [{ platform: "GitHub", img: "/images/icon-github.svg", bg: "#1A1A1A" }, { platform: "Frontend Mentor", img: "/images/icon-frontend-mentor.svg", bg: "#FFFFFF", textColor: "#333333", border: "border-[1px] border-solid border-[#D9D9D9]" }, { platform: "Twitter", img: "/images/icon-twitter.svg", bg: "#43B7E9" }, { platform: "LinkedIn", img: "/images/icon-linkedin.svg", bg: "#2D68FF" }, { platform: "YouTube", img: "/images/icon-youtube.svg", bg: "#EE3939" }, { platform: "Facebook", img: "/images/icon-facebook.svg", bg: "#2442AC" }, { platform: "Twitch", img: "/images/icon-twitch.svg", bg: "#EE3FC8" }, { platform: "Dev.to", img: "/images/icon-devto.svg", bg: "#333333" }, { platform: "Codewars", img: "/images/icon-codewars.svg", bg: "#8A1A50" }, { platform: "Codepen", img: "/images/icon-codepen.svg", bg: "#131417" }, { platform: "freeCodeCamp", img: "/images/icon-freecodecamp.svg", bg: "#302267" }, { platform: "GitLab", img: "/images/icon-gitlab.svg", bg: "#EB4925" }, { platform: "Hashnode", img: "/images/icon-hashnode.svg", bg: "#0330D1" }, { platform: "Stack Overflow", img: "/images/icon-stack-overflow.svg", bg: "#EC7100" }]

    const [platformLinks, setPlatformLinks] = useState<{ selected: number, link: string, showDropdown: boolean }[]>([])
    const [image, setImage] = useState<string | null>(null)

    const { register, watch, setValue } = useForm({
        defaultValues: {
            firstName: "",
            lastName: "",
            email: ""
        }
    })

    useEffect(() => {
        const currentUserStringed = localStorage.getItem("100")
        if (!currentUserStringed) return
        const parsedCurrentUser = JSON.parse(currentUserStringed)
        parsedCurrentUser.links ? setPlatformLinks(parsedCurrentUser.links) : ""
        parsedCurrentUser.image ? setImage(parsedCurrentUser.image) : ""
        if (parsedCurrentUser.data) {
            setValue("firstName", parsedCurrentUser.data.firstName)
            setValue("lastName", parsedCurrentUser.data.lastName)
            setValue("email", parsedCurrentUser.data.email)
        }
    }, [])

    const location = useLocation()

    const [isTablet, setIsTablet] = useState(false)

    useEffect(() => {
        setIsTablet(window.innerWidth < 1150)
        const handleResize = () => setIsTablet(window.innerWidth < 1150)
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])

    return (location.pathname.includes("links") || location.pathname.includes("profileDetails") ?
        <div className="flex items-center justify-center min-h-[100vh] bg-[#FAFAFA]">
            <div className="w-[100%] min-h-[100vh] p-[24px] flex flex-col gap-[24px]">
                <Header isTablet={isTablet} />
                <main className="flex gap-[24px] h-[834px]">
                    <Phone isTablet={isTablet} platformLinks={platformLinks} image={image ? image : ""} allMenuList={allMenuList} watch={watch} />
                    <section className="w-[100%] h-[100%] pt-[40px] flex bg-[#FFFFFF] rounded-[12px] flex-col justify-between">
                        <Outlet context={{ image, setImage, allMenuList, setPlatformLinks, platformLinks, register, watch }} />
                        <SavePart image={image ? image : ""} platformLinks={platformLinks} watch={watch} />
                    </section>
                </main>
            </div>
        </div>
        : <Preview image={image ? image : ""} allMenuList={allMenuList} platformLinks={platformLinks} watch={watch} />)
}
