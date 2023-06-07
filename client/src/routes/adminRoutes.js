import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/admin/LoginPage";
import AdminHome from "../pages/admin/AdminHome";
import Request from "../pages/admin/Request";
import ResortDetailedView from "../pages/admin/ResortDetailedView";
import ResortList from "../pages/admin/ResortList";
import Location from "../pages/admin/Location";
import ResortInfo from "../pages/admin/ResortInfo";
import UsersList from "../pages/admin/UsersList";
import ProtectedAdmin from "../components/protectedRoute/ProtectedAdmin";
import BookingList from "../pages/admin/BookingList";

function AdminRoutes() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedAdmin>
              <AdminHome />
            </ProtectedAdmin>
          }
        />
        <Route
          path="/requests"
          element={
            <ProtectedAdmin>
              <Request />
            </ProtectedAdmin>
          }
        />
        <Route
          path="/view_resort/:resortId"
          element={
            <ProtectedAdmin>
              <ResortDetailedView />
            </ProtectedAdmin>
          }
        />
        <Route
          path="/resorts"
          element={
            <ProtectedAdmin>
              <ResortList />
            </ProtectedAdmin>
          }
        />
        <Route
          path="/location"
          element={
            <ProtectedAdmin>
              <Location />
            </ProtectedAdmin>
          }
        />
        <Route
          path="/resortInfo/:resortId"
          element={
            <ProtectedAdmin>
              <ResortInfo />
            </ProtectedAdmin>
          }
        />
        <Route
          path="/users"
          element={
            <ProtectedAdmin>
              <UsersList />
            </ProtectedAdmin>
          }
        />
        <Route
          path="/bookings"
          element={
            <ProtectedAdmin>
              <BookingList />
            </ProtectedAdmin>
          }
        />
      </Routes>
    </>
  );
}

export default AdminRoutes;
