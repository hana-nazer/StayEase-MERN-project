import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "../pages/user/SignUpPage";
import LoginPage from "../pages/user/LoginPage";
import ResortDetail from "../pages/user/ResortDetail";
import Booking from "../pages/user/Booking";
import BookingDetails from "../pages/user/BookingDetails";
import ProtectedUser from "../components/protectedRoute/ProtectedUser";
import LoadingFallback from "../components/LoadingFallback";
const HomePage = lazy(() => import("../pages/user/HomePage"));

function UserRoutes() {
  return (
    <>
      <Suspense fallback={<LoadingFallback/>}>
        <Routes>
          <Route path="" element={<HomePage />} />
        </Routes>
      </Suspense>
      <Routes>
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route path="" element={<HomePage />} /> */}
        <Route path="/resortInfo/:resortId" element={<ResortDetail />} />

        <Route
          path="/book/:resortId"
          element={
            <ProtectedUser>
              <Booking />
            </ProtectedUser>
          }
        />
        <Route
          path="/bookingdetails"
          element={
            <ProtectedUser>
              <BookingDetails />
            </ProtectedUser>
          }
        />
      </Routes>
    </>
  );
}

export default UserRoutes;
