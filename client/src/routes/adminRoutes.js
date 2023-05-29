import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/admin/LoginPage";
import AdminHome from "../pages/admin/AdminHome";
import Request from "../pages/admin/Request";
import ResortDetailedView from "../pages/admin/ResortDetailedView";
import ResortList from "../pages/admin/ResortList";
import Location from "../pages/admin/Location";

function AdminRoutes() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/dashboard" element={<AdminHome />} />
        <Route path="/requests" element={<Request />} />
        <Route path="/view_resort/:resortId" element={<ResortDetailedView />} />
        <Route path="/resorts" element={<ResortList/>}/>
        <Route path="/location" element={<Location/>}/>
      </Routes>
    </>
  );
}

export default AdminRoutes;
