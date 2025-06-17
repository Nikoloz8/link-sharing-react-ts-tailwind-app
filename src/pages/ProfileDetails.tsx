import { useOutletContext } from "react-router-dom"
import tailwind from "../styles/tailwind"
import type { TMainOutletContext } from "../types"

export default function ProfileDetails() {

  const { H1, P1, H2, P2, inputStyle } = tailwind()

  const { register } = useOutletContext<TMainOutletContext>()

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
            <div className={`flex flex-col gap-[8px] p-[60px_38px] rounded-[12px] items-center bg-[#EFEBFF] `}>
              <img src="/images/icon-upload-image.svg" className="w-[40px]" alt="" />
              <h2 className={`${H2} text-[#633CFF]!`}>+ Upload Image</h2>
            </div>
            <p className={`${P2} text-[#737373] max-w-[215px]`}>Image must be below 1024x1024px. Use PNG or JPG format.</p>
            {/* <input type="file" accept="image/*" /> */}
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
