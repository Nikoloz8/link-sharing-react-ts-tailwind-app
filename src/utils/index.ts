import { useNavigate } from "react-router-dom"
import type { TFunctions } from "../types"

export default function index({ watch, reset }: TFunctions) {

    const navigate = useNavigate()

    const handleLogin = () => {
        const storedUsers = localStorage.getItem("99")
        if (!storedUsers) return

        const parsedStoredUsers = JSON.parse(storedUsers)

        for (let i = 0; i < parsedStoredUsers.length; i++) {
            if (watch().emailAddress === parsedStoredUsers[i].emailAddress && watch().createPassword === parsedStoredUsers[i].createPassword) {
                navigate("/home")
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
        parsedStoredUsers.push({ id: Math.floor(Math.random() * 100000), ...watch() })
        const stringedStoredUsers = JSON.stringify(parsedStoredUsers)
        localStorage.setItem("99", stringedStoredUsers)

    }


    return { handleLogin, handleRegister }
}
