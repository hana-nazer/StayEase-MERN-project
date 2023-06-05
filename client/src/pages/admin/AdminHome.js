import React from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";

function AdminHome() {
  const currentAdmin = useSelector((state) => state.getUser.getAdmin);
  const role = currentAdmin.role;
  const name = currentAdmin.name;
  return (
    <>
      <Navbar role={role} name={name} />
      <SideBar role="admin" />
      <Footer />
    </>
  );
}

export default AdminHome;
