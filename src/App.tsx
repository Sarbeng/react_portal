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
import ProcurementRequest from "./pages/Procurement/ProcurementRequest";
import AppraisalFormBPage1 from "./pages/Appraisal/hodAppraisalPages/AppraisalFormBPage1";
import AppraisalFormBPage2 from "./pages/Appraisal/hodAppraisalPages/AppraisalFormBPage2";
import AppraisalFormBPage3 from "./pages/Appraisal/hodAppraisalPages/AppraisalFormBPage3";
import AppraisalFormBPage4 from "./pages/Appraisal/hodAppraisalPages/AppraisalFormBPage4";
import AppraisalFormBPage5 from "./pages/Appraisal/hodAppraisalPages/AppraisalFormBPage5";
import AppraisalFormBPage6 from "./pages/Appraisal/hodAppraisalPages/AppraisalFormBPage6";
import AppraisalFormBPage7 from "./pages/Appraisal/hodAppraisalPages/AppraisalFormBPage7";
import AppraisalFormBPage8 from "./pages/Appraisal/hodAppraisalPages/AppraisalFormBPage8";
import AppraisalFormBPage9 from "./pages/Appraisal/hodAppraisalPages/AppraisalFormBPage9";
import AppraisalFormBPage10 from "./pages/Appraisal/hodAppraisalPages/AppraisalFormBPage10";
import AppraisalFormBPage11 from "./pages/Appraisal/hodAppraisalPages/AppraisalFormBPage11";
import AppraisalFormBPage12 from "./pages/Appraisal/hodAppraisalPages/AppraisalFormBPage12";
import AppraisalFormBPage13 from "./pages/Appraisal/hodAppraisalPages/AppraisalFormBPage13";

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
        {/* Start of HOD Appraisal Pages */}
        <Route path="/hod_appraisalPage1" element={<RequireAuth loginPath="/"><AppraisalFormBPage1 /></RequireAuth>} />
        <Route path="/hod_appraisalPage2" element={<RequireAuth loginPath="/"><AppraisalFormBPage2 /></RequireAuth>} />
        <Route path="/hod_appraisalPage3" element={<RequireAuth loginPath="/"><AppraisalFormBPage3 /></RequireAuth>} />
        <Route path="/hod_appraisalPage4" element={<RequireAuth loginPath="/"><AppraisalFormBPage4 /></RequireAuth>} />
        <Route path="/hod_appraisalPage5" element={<RequireAuth loginPath="/"><AppraisalFormBPage5 /></RequireAuth>} />
        <Route path="/hod_appraisalPage6" element={<RequireAuth loginPath="/"><AppraisalFormBPage6 /></RequireAuth>} />
        <Route path="/hod_appraisalPage7" element={<RequireAuth loginPath="/"><AppraisalFormBPage7 /></RequireAuth>} />
        <Route path="/hod_appraisalPage8" element={<RequireAuth loginPath="/"><AppraisalFormBPage8 /></RequireAuth>} />
        <Route path="/hod_appraisalPage9" element={<RequireAuth loginPath="/"><AppraisalFormBPage9 /></RequireAuth>} />
        <Route path="/hod_appraisalPage10" element={<RequireAuth loginPath="/"><AppraisalFormBPage10 /></RequireAuth>} />
        <Route path="/hod_appraisalPage11" element={<RequireAuth loginPath="/"><AppraisalFormBPage11 /></RequireAuth>} />
        <Route path="/hod_appraisalPage12" element={<RequireAuth loginPath="/"><AppraisalFormBPage12 /></RequireAuth>} />
        <Route path="/hod_appraisalPage13" element={<RequireAuth loginPath="/"><AppraisalFormBPage13 /></RequireAuth>} />
        {/* END of HOD Appraisal Pages */}
         {/* End of Appraisal Pages */}
        {/* Start of Procurement Pages */}
        <Route path="/procurement" element={<RequireAuth loginPath="/"><Procurement /></RequireAuth>} />
        <Route path="/procurementRequest" element={<RequireAuth loginPath="/"><ProcurementRequest /></RequireAuth>} />
         {/* End of Procurement Pages */}
        <Route path="*" element={<Error404 />} />
      </Routes>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
