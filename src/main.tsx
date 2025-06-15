import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './pages/Register'
import Layout from './layouts/Layout'
import Login from './pages/Login'
import Home from './pages/Home'

const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      {
        element: <Register />,
        path: "/register"
      },
      {
        element: <Login />,
        path: "/login"
      },
      {
        element: <Home />,
        path: "/home"
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
