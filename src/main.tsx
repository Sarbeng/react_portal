import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { AuthProvider } from 'react-auth-kit'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage.tsx'
import Error404 from './pages/Error404/Error404.tsx'
import LayoutPage from './pages/Layout/LayoutPage.tsx'
import PersonalDetails from './pages/PersonalDetails/PersonalDetails.tsx'
import HomePage from './pages/Home/HomePage.tsx'
import LeavePage from './pages/Leave/LeavePage.tsx'
import Promotion from "./pages/Promotion/Promotion"
import PromotionPage1 from './pages/Promotion/pages/PromotionPage1.tsx'
import PromotionPage2 from './pages/Promotion/pages/PromotionPage2.tsx'
import PromotionPage3 from './pages/Promotion/pages/PromotionPage3.tsx'
import PromotionPage4 from './pages/Promotion/pages/PromotionPage4.tsx'
import PromotionPage5 from './pages/Promotion/pages/PromotionPage5.tsx'
import PromotionDocUpload from './pages/Promotion/pages/PromotionDocUpload.tsx'
import Appraisal from './pages/Appraisal/Appraisal.tsx'
import AppraisalFormBPage1 from './pages/Appraisal/hodAppraisalPages/AppraisalFormBPage1.tsx'
import AppraisalFormBPage11 from './pages/Appraisal/hodAppraisalPages/AppraisalFormBPage11.tsx'
import AppraisalFormBPage2 from './pages/Appraisal/hodAppraisalPages/AppraisalFormBPage2.tsx'
import AppraisalPage2 from './pages/Appraisal/pages/AppraisalPage2.tsx'
import AppraisalPage1 from './pages/Appraisal/pages/AppraisalPage1.tsx'
import AppraisalPage3 from './pages/Appraisal/pages/AppraisalPage3.tsx'
import AppraisalFormBPage3 from './pages/Appraisal/hodAppraisalPages/AppraisalFormBPage3.tsx'
import AppraisalFormBPage4 from './pages/Appraisal/hodAppraisalPages/AppraisalFormBPage4.tsx'
import AppraisalFormBPage5 from './pages/Appraisal/hodAppraisalPages/AppraisalFormBPage5.tsx'
import AppraisalFormBPage6 from './pages/Appraisal/hodAppraisalPages/AppraisalFormBPage6.tsx'
import AppraisalFormBPage7 from './pages/Appraisal/hodAppraisalPages/AppraisalFormBPage7.tsx'
import AppraisalFormBPage8 from './pages/Appraisal/hodAppraisalPages/AppraisalFormBPage8.tsx'
import AppraisalFormBPage9 from './pages/Appraisal/hodAppraisalPages/AppraisalFormBPage9.tsx'
import AppraisalFormBPage10 from './pages/Appraisal/hodAppraisalPages/AppraisalFormBPage10.tsx'
import AppraisalFormBPage12 from './pages/Appraisal/hodAppraisalPages/AppraisalFormBPage12.tsx'
import AppraisalFormBPage13 from './pages/Appraisal/hodAppraisalPages/AppraisalFormBPage13.tsx'
import Procurement from './pages/Procurement/Procurement.tsx'
import ProcurementRequest from './pages/Procurement/ProcurementRequest.tsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<LoginPage />,
    errorElement:<Error404/>,
  },
  {
    path:'/dashboard',
    element:<LayoutPage/>,
    children: [
      {
        path:'home',
        element:<HomePage/>
      },
      {
        path:'personalDetails',
        element:<PersonalDetails/>
      },
      {
        path:'leave',
        element:<LeavePage/>
      },
      //start promotion pages
      {
        path:'promotion',
        element:<Promotion />
      },
      {
        path:'promotion',
        element:<Promotion />
      },
      {
        path:'promotionpage1',
        element:<PromotionPage1 />
      },
      {
        path:'promotionpage2',
        element:<PromotionPage2 />
      },
      {
        path:'promotionpage3',
        element:<PromotionPage3 />
      },
      {
        path:'promotionpage4',
        element:<PromotionPage4 />
      },
      {
        path:'promotionpage5',
        element:<PromotionPage5 />
      },
      {
        path:'promotionDocUpload',
        element:<PromotionDocUpload />
      },
       //end promotion pages
        //start appraisal pages
        {
          path:'appraisal',
          element:<Appraisal />
        },
        {
          path:'appraisalPage1',
          element:<AppraisalPage1 />
        },
        {
          path:'appraisalPage2',
          element:<AppraisalPage2/>
        },
        {
          path:'appraisalPage3',
          element:<AppraisalPage3 />
        },
        //start of hod_appraisal pages
        {
          path:'hod_appraisalPage1',
          element:<AppraisalFormBPage1 />
        },
        {
          path:'hod_appraisalPage2',
          element:<AppraisalFormBPage2 />
        },
        {
          path:'hod_appraisalPage3',
          element:<AppraisalFormBPage3 />
        },
        {
          path:'hod_appraisalPage4',
          element:<AppraisalFormBPage4 />
        },
        {
          path:'hod_appraisalPage5',
          element:<AppraisalFormBPage5 />
        },
        {
          path:'hod_appraisalPage6',
          element:<AppraisalFormBPage6 />
        },
        {
          path:'hod_appraisalPage7',
          element:<AppraisalFormBPage7 />
        },
        {
          path:'hod_appraisalPage8',
          element:<AppraisalFormBPage8 />
        },
        {
          path:'hod_appraisalPage9',
          element:<AppraisalFormBPage9 />
        },
        {
          path:'hod_appraisalPage10',
          element:<AppraisalFormBPage10 />
        },
        {
          path:'hod_appraisalPage11',
          element:<AppraisalFormBPage11 />
        },
        {
          path:'hod_appraisalPage12',
          element:<AppraisalFormBPage12 />
        },
        {
          path:'hod_appraisalPage13',
          element:<AppraisalFormBPage13 />
        },
        //end of hod_appraisal pages
        //start of procurement
        {
          path:'procurement',
          element:<Procurement />
        },
        {
          path:'procurementRequest',
          element:<ProcurementRequest />
        },
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
