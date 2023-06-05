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
      <Navbar role={role} name={name}/>
      <div className="flex flex-grow">
        <div className="w-1/4">
          <Sidebar role="admin" />
        </div>
        <div className="w-3/4 mb-16 mt-14">
          <Approval />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Request;
