import React from "react";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "../pages/user/SignUpPage";
import LoginPage from "../pages/user/LoginPage";
import HomePage from "../pages/user/HomePage";
import ResortDetail from "../pages/user/ResortDetail";
import Booking from "../pages/user/Booking";
import BookingDetails from "../pages/user/BookingDetails";
React.lazy(() => {});
function UserRoutes() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="" element={<HomePage />} />
        <Route path="/resortInfo/:resortId" element={<ResortDetail/>}/>
        <Route path="/book/:resortId" element={<Booking/>}/>
        <Route path="/bookingdetails" element={<BookingDetails/>}/>
      </Routes>
    </>
  );
}

export default UserRoutes;
