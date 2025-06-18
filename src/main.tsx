import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './pages/Register'
import LoginRegisterLayout from './layouts/Login&RegisterLayout'
import Login from './pages/Login'
import Links from './pages/Links'
import MainLayout from './layouts/MainLayout'
import ProfileDetails from './pages/ProfileDetails'
import Preview from './pages/Preview'

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    path: "/main",
    children: [
      {
        element: <Links />,
        path: "/main/links"
      },
      {
        element: <ProfileDetails />,
        path: "/main/profileDetails"
      },
      {
        element: <Preview />,
        path: "/main/preview"
      }
    ]
  },
  {
    element: <LoginRegisterLayout />,
    path: "/",
    children: [
      {
        element: <Register />,
        path: "/register"
      },
      {
        element: <Login />,
        path: "/login"
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
