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
import EditResortData from "../pages/owner/EditResortData";
import Error500 from "../components/error/ownerError/Error500";
import Error404 from "../components/error/ownerError/Error404";
import ChatList from "../pages/owner/ChatList";
import ChatPage from "../pages/owner/ChatPage";

function OwnerRoutes() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path="/"
        element={
          <Protected>
            <HomePage />
          </Protected>
        }
      />
      <Route
        path="/resortlist"
        element={
          <Protected>
            <ResortList />
          </Protected>
        }
      />
      <Route
        path="/register"
        element={
          <Protected>
            <RegistrationPage />
          </Protected>
        }
      />
      <Route
        path="/resortInfo/:resortId"
        element={
          <Protected>
            <ResortInfo />
          </Protected>
        }
      />
      <Route
        path="/bookings"
        element={
          <Protected>
            <BookingData />
          </Protected>
        }
      />
      <Route
        path="/edit/:id"
        element={
          <Protected>
            <EditResortData />
          </Protected>
        }
      />

      <Route
        path="/chat/:id"
        element={
          <Protected>
            <ChatPage />
          </Protected>
        }
      />

      <Route path="/contacts/:id" element={<ChatList />} />
      <Route path="/error500" element={<Error500 />} />
      <Route path="/*" element={<Error404 />} />
    </Routes>
  );
}

export default OwnerRoutes;
