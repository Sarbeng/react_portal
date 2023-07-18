import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage"
//import LayoutPage from "./pages/Layout/LayoutPage";
import HomePage from "./pages/Home/HomePage";
import Error404 from "./pages/Error404/Error404";
import PersonalDetails from "./pages/PersonalDetails/PersonalDetails";
//import Circular from "./pages/Circular/Circular";
import LeavePage from "./pages/Leave/LeavePage";
import Promotion from "./pages/Promotion/Promotion"
import Appraisal from "./pages/Appraisal/Appraisal";
import Procurement from "./pages/Procurement/Procurement";
import { RequireAuth } from "react-auth-kit";
import PromotionPage1 from "./pages/Promotion/pages/PromotionPage1";
import PromotionPage2 from "./pages/Promotion/pages/PromotionPage2";
import PromotionPage3 from "./pages/Promotion/pages/PromotionPage3";
import PromotionPage4 from "./pages/Promotion/pages/PromotionPage4";
import PromotionPage5 from "./pages/Promotion/pages/PromotionPage5";
import PromotionDocUpload from "./pages/Promotion/pages/PromotionDocUpload";
import AppraisalPage1 from "./pages/Appraisal/pages/AppraisalPage1";
import AppraisalPage2 from "./pages/Appraisal/pages/AppraisalPage2";
import AppraisalPage3 from "./pages/Appraisal/pages/AppraisalPage3";

function App() {

  return (
    <>
    {/* This is will handle all the routes in my application */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<RequireAuth loginPath="/"><HomePage /></RequireAuth>} />
        <Route path="/personalDetails" element={<PersonalDetails />} />
        {/* <Route path="/circular" element={<Circular />} /> */}
        <Route path="/leave" element={<RequireAuth loginPath="/"><LeavePage /></RequireAuth>} />
        {/* Start of Promotion Pages */}
        <Route path="/promotion" element={<RequireAuth loginPath="/"><Promotion /></RequireAuth>} />
        <Route path="/promotionpage1" element={<RequireAuth loginPath="/"><PromotionPage1 /></RequireAuth>} />
        <Route path="/promotionpage2" element={<RequireAuth loginPath="/"><PromotionPage2 /></RequireAuth>} />
        <Route path="/promotionpage3" element={<RequireAuth loginPath="/"><PromotionPage3 /></RequireAuth>} />
        <Route path="/promotionpage4" element={<RequireAuth loginPath="/"><PromotionPage4 /></RequireAuth>} />
        <Route path="/promotionpage5" element={<RequireAuth loginPath="/"><PromotionPage5 /></RequireAuth>} />
        <Route path="/promotionDocUpload" element={<RequireAuth loginPath="/"><PromotionDocUpload /></RequireAuth>} />
        {/* End of Promotion Pages */}
        {/* Start of Appraisal Pages */}
        <Route path="/appraisal" element={<RequireAuth loginPath="/"><Appraisal /></RequireAuth>} />
        <Route path="/appraisalPage1" element={<RequireAuth loginPath="/"><AppraisalPage1 /></RequireAuth>} />
        <Route path="/appraisalPage2" element={<RequireAuth loginPath="/"><AppraisalPage2 /></RequireAuth>} />
        <Route path="/appraisalPage3" element={<RequireAuth loginPath="/"><AppraisalPage3 /></RequireAuth>} />
         {/* End of Appraisal Pages */}
        
        <Route path="/procurement" element={<RequireAuth loginPath="/"><Procurement /></RequireAuth>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
