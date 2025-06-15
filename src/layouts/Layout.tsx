import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="flex items-center p-[50px_0] justify-center min-h-[100vh] bg-[#FAFAFA]">
        <Outlet />
    </div>
  )
}
