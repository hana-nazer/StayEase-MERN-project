import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/SideBar";
import Footer from "../../components/Footer";
import Approval from "../../components/admin/Approval";
import { useSelector } from "react-redux";

function Request() {
  const currentAdmin = useSelector((state) => state.getUser.getAdmin);
  const role = currentAdmin.role;
  const name = currentAdmin.name;
  return (
    <div className="flex flex-col h-screen">
      <Navbar role={role} name={name} />
      <Sidebar role="admin" />
      <Approval />
      <Footer />
    </div>
  );
}

export default Request;
