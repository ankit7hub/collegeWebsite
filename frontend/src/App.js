import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminHomePage from "./pages/adminpages/AdminHomePage";
import AdminLoginPage from "./pages/adminpages/AdminLoginPage";
import UserHomePage from "./pages/userpages/UserHomePage";
import StdRegPage from "./pages/adminpages/StdRegPage";
import StdDisplayPage from "./pages/adminpages/StdDisplayPage";
import FacRegPage from "./pages/adminpages/FacRegPage";
import FacDisplayPage from "./pages/adminpages/FacDisplayPage";
import AdminLogoutPage from "./pages/adminpages/AdminLogoutPage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<UserHomePage/>}/>
      <Route path="/adminlogin" element={<AdminLoginPage/>}/>
      <Route path="/adminhome" element={<AdminHomePage/>}/>
      <Route path="/stdreg" element={<StdRegPage/>}/>
      <Route path="/stddisplay" element={<StdDisplayPage/>}/>
      <Route path="/facreg" element={<FacRegPage/>}/>
      <Route path="/facdisplay" element={<FacDisplayPage/>}/>
      <Route path="/adminlogout" element={<AdminLogoutPage/>}/>
      <Route path="*" element={<PageNotFound/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
