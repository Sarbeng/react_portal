import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage"
//import LayoutPage from "./pages/Layout/LayoutPage";
import HomePage from "./pages/Home/HomePage";
import Error404 from "./pages/Error404/Error404";

function App() {

  return (
    <>
    {/* This is will handle all the routes in my application */}
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/personalDetails" element={<HomePage />} />
        <Route path="/circular" element={<HomePage />} />
        <Route path="/leave" element={<HomePage />} />
        <Route path="/promotion" element={<HomePage />} />
        <Route path="/appraisal" element={<HomePage />} />
        <Route path="/procurement" element={<HomePage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
