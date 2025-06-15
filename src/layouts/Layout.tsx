import { useForm } from "react-hook-form";
import { Outlet } from "react-router-dom";

export default function Layout() {

  const { register, watch, setError, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      emailAddress: "",
      createPassword: "",
      confirmPassword: ""
    }
  })


  return (
    <div className="flex items-center p-[50px_0] justify-center min-h-[100vh] bg-[#FAFAFA]">
      <Outlet context={{register, watch, setError, handleSubmit, errors, reset}}/>
    </div>
  )
}
