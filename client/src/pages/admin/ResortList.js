import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/SideBar";
import Resorts from "../../components/admin/Resorts";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";

function ResortList() {
  const currentAdmin = useSelector((state) => state.getUser.getAdmin);
  const role = currentAdmin.role;
  const name = currentAdmin.name;
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar role={role} name={name} />
            <Sidebar role="admin" />
            <div className="container py-10 mx-1 mt-20 mb-16 ml-10 lg:ml-0">
            <Resorts />
          </div>
        <Footer />
      </div>
    </>
  );
}

export default ResortList;