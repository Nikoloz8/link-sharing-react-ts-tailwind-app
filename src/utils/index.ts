import { useLocation, useNavigate } from "react-router-dom"
import type { TFunctions, TUser } from "../types"

export default function index({ watch, reset, platformLinks, image, setImage }: TFunctions) {

    const navigate = useNavigate()

    const handleLogin = () => {
        const storedUsers = localStorage.getItem("99")
        if (!storedUsers) return

        const parsedStoredUsers = JSON.parse(storedUsers)

        for (let i = 0; i < parsedStoredUsers.length; i++) {
            if (watch().emailAddress === parsedStoredUsers[i].emailAddress && watch().createPassword === parsedStoredUsers[i].password) {
                const parsedStoredUser = parsedStoredUsers.find((e: TUser) => e.emailAddress === watch().emailAddress && e.password === watch().createPassword)

                navigate("/main/links")
                const currentUser = {
                    emailAddress: parsedStoredUser.emailAddress,
                    password: parsedStoredUser.password,
                    image: parsedStoredUser?.image,
                    links: parsedStoredUser?.links,
                    data: parsedStoredUser?.data
                }
                const stringedCurrentUser = JSON.stringify(currentUser)
                localStorage.setItem("100", stringedCurrentUser)
                reset!()
            } else {
                console.log("no match")
            }
        }
    }

    const handleRegister = () => {
        const storedUsers = localStorage.getItem("99")

        if (!storedUsers) return

        const parsedStoredUsers = JSON.parse(storedUsers)
        parsedStoredUsers.push({ id: Math.floor(Math.random() * 100000), emailAddress: watch().emailAddress, password: watch().createPassword })
        const stringedStoredUsers = JSON.stringify(parsedStoredUsers)
        localStorage.setItem("99", stringedStoredUsers)

    }

    const handleSave = () => {
        const stringedUsers = localStorage.getItem("99")
        const stringedCurrentUser = localStorage.getItem("100")
        if (!stringedCurrentUser || !stringedUsers) return
        const parsedUsers = JSON.parse(stringedUsers)
        const parsedCurrentUser = JSON.parse(stringedCurrentUser)
        const currentUserInParsedUsers = parsedUsers.find((e: TUser) => e.emailAddress === parsedCurrentUser.emailAddress && e.password === parsedCurrentUser.password)
        currentUserInParsedUsers.links = platformLinks
        currentUserInParsedUsers.data = watch()
        currentUserInParsedUsers.image = image
        const filteredParsedUsers = parsedUsers.filter((e: TUser) => e.id !== currentUserInParsedUsers.id)
        filteredParsedUsers.push(currentUserInParsedUsers)
        const stringedCurrentUserInParsedUssers = JSON.stringify(currentUserInParsedUsers)
        const stringedFilteredUsers = JSON.stringify(filteredParsedUsers)
        localStorage.setItem("99", stringedFilteredUsers)
        localStorage.setItem("100", stringedCurrentUserInParsedUssers)
    }

    const handleClickOnUpload = (fileInputRef: React.RefObject<HTMLInputElement | null>) => {
        fileInputRef?.current?.click()
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setImage!(String(reader.result))
            }
            reader.readAsDataURL(file)
        }
    }

    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(window.location.href)
        } catch (e) {
            console.log(e)
        }
    }


    return { handleLogin, handleRegister, handleSave, handleClickOnUpload, handleFileChange, handleCopy }
}
