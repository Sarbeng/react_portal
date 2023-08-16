import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AuthProvider } from 'react-auth-kit'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage.tsx'
import Error404 from './pages/Error404/Error404.tsx'
import LayoutPage from './pages/Layout/LayoutPage.tsx'
import PersonalDetails from './pages/PersonalDetails/PersonalDetails.tsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<LoginPage />,
    errorElement:<Error404/>
  },
  {
    path:'/dashboard',
    element:<LayoutPage/>,
    children: [
      {
        path:'home',
        element:<PersonalDetails/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>

    <AuthProvider
      authType={'cookie'}
      authName={'_auth'}
      cookieDomain={window.location.hostname}
      //use true when using https
      cookieSecure={false}
    >
     <RouterProvider  router={router}/>
       
   
    </AuthProvider>
  </React.StrictMode>,
)
