import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sidebar from "../../components/SideBar";
import Resorts from "../../components/owner/Resorts";
import { useSelector } from "react-redux";

function ResortList() {
  const currentUser = useSelector((state) => state.getUser.getOwner);
  const role = currentUser.role;
  const name = currentUser.name;
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar role={role} name={name} />
        <Sidebar role="owner" />
        <div className="container py-10 mt-20 mb-16 lg:ml-0">
          <Resorts />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ResortList;
