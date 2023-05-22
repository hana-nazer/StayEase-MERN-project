import React from "react";
import { Route, Routes} from "react-router-dom";
import SignUpPage from "../pages/owner/SignUpPage";
import LoginPage from "../pages/owner/LoginPage";
import RegistrationPage from "../pages/owner/RegistrationPage";
import HomePage from "../pages/owner/HomePage";
import ResortList from "../pages/owner/ResortList";

function OwnerRoutes() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="" element={<HomePage/>} />
      <Route path="/resortlist" element={<ResortList/>}/>
      <Route path="/register" element={<RegistrationPage />} />
    </Routes>
  );
}

export default OwnerRoutes;
