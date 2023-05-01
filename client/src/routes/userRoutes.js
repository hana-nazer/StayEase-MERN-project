import React from "react";
import {Route, Routes } from "react-router-dom";
import SignUpPage from '../pages/user/SignUpPage';
import LoginPage from '../pages/user/LoginPage'
import HomePage from "../pages/user/HomePage";
React.lazy(()=>{})
function UserRoutes() {
  return (
    <>
      <Routes>
        <Route path="/signup" element={<SignUpPage/>} />
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
    </>
  );
}

export default UserRoutes;
