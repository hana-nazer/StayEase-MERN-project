import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/SideBar";
import DashboardData from "../../components/Dashboard/DashboardData";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";

function HomePage() {
  const currentUser = useSelector((state) => state.getUser.getOwner);
  const role = currentUser.role;
  const name = currentUser.name;
  return (
    <>
      <div className="flex flex-col h-screen overflow-y-hidden">
        <Navbar role={role} name={name} />
        <Sidebar role="owner" />
        <div className="container w-full mx-12 mb-16 lg:ml-52 lg:w-3/4 mt-14">
          <DashboardData />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;
