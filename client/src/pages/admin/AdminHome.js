import React from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import Footer from "../../components/Footer";

function AdminHome() {
  return (
    <>
      <Navbar title="StayEase Admin" name="admin" role="admin" />
      <SideBar role="admin"/>
      <Footer role="admin"/>
    </>
  );
} 

export default AdminHome;
