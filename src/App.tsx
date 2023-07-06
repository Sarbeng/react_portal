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
        <Route path="/promotion" element={<RequireAuth loginPath="/"><Promotion /></RequireAuth>} />
        <Route path="/appraisal" element={<RequireAuth loginPath="/"><Appraisal /></RequireAuth>} />
        <Route path="/procurement" element={<RequireAuth loginPath="/"><Procurement /></RequireAuth>} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
