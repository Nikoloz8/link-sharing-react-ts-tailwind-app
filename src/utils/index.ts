import type { TFunctions } from "../types"

export default function index({ watch, setError }: TFunctions) {

    const onSubmitLogin = () => {
        if (watch().confirmPassword.trim() === "") {
            setError("createPassword", { message: "Please check again" })
        }
        if (watch().emailAddress.trim() === "") {
            setError("emailAddress", { message: "Can’t be empty" })
        }
    }

    const onSubmitRegister = () => {
        if (watch().createPassword !== watch().confirmPassword || watch().confirmPassword.trim() === "") {
            setError("createPassword", { message: "Please check again" })
        }
        if (watch().emailAddress.trim() === "") {
            setError("emailAddress", { message: "Can’t be empty" })
        }
    }

    return { onSubmitLogin, onSubmitRegister }
}
