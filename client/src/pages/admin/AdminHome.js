import React from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import Footer from "../../components/Footer";

function AdminHome() {
  return (
    <>
      <Navbar/>
      <SideBar role="admin" />
      <Footer />
    </>
  );
}

export default AdminHome;
