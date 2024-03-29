import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import SignUpPage from "../pages/user/SignUpPage";
import LoginPage from "../pages/user/LoginPage";
import ResortDetail from "../pages/user/ResortDetail";
import Booking from "../pages/user/Booking";
import BookingDetails from "../pages/user/BookingDetails";
import ProtectedUser from "../components/protectedRoute/ProtectedUser";
import LoadingFallback from "../components/LoadingFallback";
import Success from "../components/Success";
import AllBookings from "../pages/user/AllBookings";
import ResetEmail from "../pages/user/ResetEmail";
import ResetPassword from "../pages/user/ResetPassword";
import Error404 from "../components/error/userError/Error404";
import Error500 from "../components/error/userError/Error500";
import ChatList from "../pages/user/ChatList";
import ChatPage from "../pages/user/ChatPage";
const HomePage = lazy(() => import("../pages/user/HomePage"));

function UserRoutes() {
  return (
    <Suspense fallback={<LoadingFallback />}>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<LoginPage />} />
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

        <Route
          path="/success"
          element={
            <ProtectedUser>
              <Success />
            </ProtectedUser>
          }
        />
        <Route
          path="/allBookings"
          element={
            <ProtectedUser>
              <AllBookings />
            </ProtectedUser>
          }
        />

        <Route
          path="/contacts/:id"
          element={
            <ProtectedUser>
              <ChatList />
            </ProtectedUser>
          }
        />

        <Route
          path="/chat/:id"
          element={
            <ProtectedUser>
              <ChatPage />
            </ProtectedUser>
          }
        />

        <Route path="/reset" element={<ResetEmail />} />
        <Route path="/reset-password/:id/:token" element={<ResetPassword />} />

        <Route path="/error500" element={<Error500 />} />
        <Route path="/*" element={<Error404 />} />
      </Routes>
    </Suspense>
  );
}

export default UserRoutes;
