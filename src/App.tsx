import {BrowserRouter, Route, Routes} from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage"
//import LayoutPage from "./pages/Layout/LayoutPage";
import HomePage from "./pages/Home/HomePage";

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
