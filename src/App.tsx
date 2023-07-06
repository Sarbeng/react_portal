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

function App() {

  return (
    <>
    {/* This is will handle all the routes in my application */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/personalDetails" element={<PersonalDetails />} />
        {/* <Route path="/circular" element={<Circular />} /> */}
        <Route path="/leave" element={<LeavePage />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="/appraisal" element={<Appraisal />} />
        <Route path="/procurement" element={<Procurement />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      </BrowserRouter>
      
      
    </>
  )
}

export default App
