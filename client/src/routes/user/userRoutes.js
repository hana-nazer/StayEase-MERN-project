import { Routes, Route } from "react-router-dom";
import React from "react";
import SignUpPage from "../../pages/user/SignUpPage";
import LoginPage from "../../pages/user/LoginPage";

function UserRoutes() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUpPage/>} />
      <Route path="/login" element={<LoginPage/>} />
    </Routes>
  );
}

export default UserRoutes;
