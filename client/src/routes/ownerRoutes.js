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
import List from "../pages/chats/List";
import Message from "../pages/chats/Message";
import EditResortData from "../pages/owner/EditResortData";

function OwnerRoutes() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route
        path=""
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
        path="/chatlist"
        element={
          <Protected>
            <List />
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
        path="/message"
        element={
          <Protected>
            <Message />
          </Protected>
        }
      />
    </Routes>
  );
}

export default OwnerRoutes;
