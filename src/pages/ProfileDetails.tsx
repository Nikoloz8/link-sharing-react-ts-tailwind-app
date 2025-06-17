import tailwind from "../styles/tailwind"
import FileUploadBar from "../components/MainLayout/FileUploadBar"
import Form from "../components/MainLayout/Form"

export default function ProfileDetails() {

  const { H1, P1 } = tailwind()

  return (
    <div className="flex flex-col gap-[40px]">
      <div className="flex flex-col gap-[8px] p-[0_40px]!">
        <h1 className={`${H1}`}>Profile Details</h1>
        <p className={`${P1}`}>Add your details to create a personal touch to your profile.</p>
      </div>
      <div className="flex flex-col gap-[24px] p-[0_40px]">
      
        <FileUploadBar />
      
        <Form />
      
      </div>
    </div>
  )
}
