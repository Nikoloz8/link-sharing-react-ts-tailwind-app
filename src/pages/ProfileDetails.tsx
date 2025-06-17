import { useOutletContext } from "react-router-dom"
import tailwind from "../styles/tailwind"
import type { TMainOutletContext } from "../types"
import { useRef } from "react"

export default function ProfileDetails() {

  const { H1, P1, H2, P2, inputStyle } = tailwind()

  const { register, image, setImage } = useOutletContext<TMainOutletContext>()

  const fileInputRef = useRef<HTMLInputElement | null>(null)

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


  return (
    <div className="flex flex-col gap-[40px]">
      <div className="flex flex-col gap-[8px] p-[0_40px]!">
        <h1 className={`${H1}`}>Profile Details</h1>
        <p className={`${P1}`}>Add your details to create a personal touch to your profile.</p>
      </div>
      <div className="flex flex-col gap-[24px] p-[0_40px]">
        <div className="flex p-[20px] justify-between items-center rounded-[12px] bg-[#FAFAFA] ">
          <h5 className={`${P1} text-[#737373] inline`}>Profile picture</h5>
          <div className="flex gap-[24px] items-center">
            <div onClick={() => handleClickOnUpload(fileInputRef)} className={`flex flex-col cursor-pointer gap-[8px] p-[60px_38px] rounded-[12px] items-center bg-[#EFEBFF] bg-center bg-cover bg-no-repeat`} style={image ? { backgroundImage: `url("${image}")` } : undefined}>
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="none" viewBox="0 0 40 40"><path fill={image ? "#FFFFFF" : "#633CFF"} d="M33.75 6.25H6.25a2.5 2.5 0 0 0-2.5 2.5v22.5a2.5 2.5 0 0 0 2.5 2.5h27.5a2.5 2.5 0 0 0 2.5-2.5V8.75a2.5 2.5 0 0 0-2.5-2.5Zm0 2.5v16.055l-4.073-4.072a2.5 2.5 0 0 0-3.536 0l-3.125 3.125-6.875-6.875a2.5 2.5 0 0 0-3.535 0L6.25 23.339V8.75h27.5ZM6.25 26.875l8.125-8.125 12.5 12.5H6.25v-4.375Zm27.5 4.375h-3.34l-5.624-5.625L27.91 22.5l5.839 5.84v2.91ZM22.5 15.625a1.875 1.875 0 1 1 3.75 0 1.875 1.875 0 0 1-3.75 0Z" /></svg>
              <h2 className={`${H2} ${image ? "text-[#FFFFFF]" : "text-[#633CFF]!"}`}>+ Upload Image</h2>
            </div>
            <p className={`${P2} text-[#737373] max-w-[215px]`}>Image must be below 1024x1024px. Use PNG or JPG format.</p>
            <input type="file" onChange={handleFileChange} accept="image/*" className="hidden" ref={fileInputRef} />
          </div>
        </div>
        <div className="flex p-[20px] justify-between items-center rounded-[12px] bg-[#FAFAFA] ">
          <form className="w-[100%] flex flex-col gap-[12px]" action="">
            <div className="flex items-center justify-between w-[100%]!">
              <label className={`${P2} text-[#737373]`} htmlFor="firstname">First name*</label>
              <input type="text" id="firstname" placeholder="e.g. John" className={`${inputStyle} p-[12px_16px]!`} {...register("firstName")} />
            </div>
            <div className="flex items-center justify-between w-[100%]!">
              <label className={`${P2} text-[#737373]`} htmlFor="lastname">Last name*</label>
              <input type="text" id="lastname" placeholder="e.g. Appleseed" className={`${inputStyle} p-[12px_16px]!`} {...register("lastName")} />
            </div>
            <div className="flex items-center justify-between w-[100%]!">
              <label className={`${P2} text-[#737373]`} htmlFor="email">Email</label>
              <input type="text" id="email" placeholder="e.g. email@example.com" className={`${inputStyle} p-[12px_16px]!`}  {...register("email")} />
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
