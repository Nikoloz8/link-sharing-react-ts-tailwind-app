import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Outlet, useNavigate } from "react-router-dom";

export default function Layout() {

  const { register, watch, setError, handleSubmit, formState: { errors }, reset, clearErrors } = useForm({
    defaultValues: {
      emailAddress: "",
      createPassword: "",
      confirmPassword: ""
    }
  })

  const navigate = useNavigate()

  useEffect(() => {
    navigate("/login")
    const storedUsers = localStorage.getItem("99")

    if (!storedUsers) {
      localStorage.setItem("99", "[]")
    }
  }, [])

  return (
    <div className="flex items-center justify-center min-h-[100vh] bg-[#FAFAFA]">
      <Outlet context={{ register, watch, setError, handleSubmit, errors, reset, clearErrors }} />
    </div>
  )
}
