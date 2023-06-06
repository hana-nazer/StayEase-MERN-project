import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "../pages/owner/SignUpPage";
import LoginPage from "../pages/owner/LoginPage";
import RegistrationPage from "../pages/owner/RegistrationPage";
import HomePage from "../pages/owner/HomePage";
import ResortList from "../pages/owner/ResortList";
import ResortInfo from "../pages/owner/ResortInfo";
import Protected from "../components/protectedRoute/ProtectedOwner";
import BookingData from "../pages/owner/BookingData";

function OwnerRoutes() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="" element={<Protected><HomePage /></Protected>} />
      <Route path="/resortlist" element={<Protected><ResortList /></Protected>} />
      <Route
        path="/register"
        element={
          <Protected>
            <RegistrationPage />
          </Protected>
        }
      />
      <Route path="/resortInfo/:resortId" element={<Protected><ResortInfo /></Protected>} />
      <Route path="/bookings" element={<Protected><BookingData/></Protected>}/>
    </Routes>
  );
}

export default OwnerRoutes;
