import { useNavigate } from "react-router-dom"
import type { TFunctions } from "../types"

export default function index({ watch, reset }: TFunctions) {

    const navigate = useNavigate()

    const handleLogin = () => {
        const storedUsers = localStorage.getItem("99")
        if (!storedUsers) return

        const parsedStoredUsers = JSON.parse(storedUsers)

        for (let i = 0; i < parsedStoredUsers.length; i++) {
            if (watch().emailAddress === parsedStoredUsers[i].emailAddress && watch().createPassword === parsedStoredUsers[i].password) {
                navigate("/main/links")
                const currentUser = {
                    emailAddress: watch().emailAddress,
                    password: watch().createPassword
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



    return { handleLogin, handleRegister }
}
