import React from "react";
import Navbar from "../../components/Navbar";
import SideBar from "../../components/SideBar";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";
import DashboardData from "../../components/Dashboard/DashboardData";

function AdminHome() {
  const currentAdmin = useSelector((state) => state.getUser.getAdmin);
  const role = currentAdmin.role;
  const name = currentAdmin.name;
  return (
    <>
      <div className="flex flex-col h-screen overflow-y-hidden">
        <Navbar role={role} name={name} />
        <SideBar role="admin" />
        <div className="container w-full mx-12 mb-16 lg:ml-52 lg:w-3/4 mt-14">
          <DashboardData />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AdminHome;
