import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/SideBar";
import Footer from "../../components/Footer";
import Approval from "../../components/admin/Approval";

function Request() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar role="admin" />
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
