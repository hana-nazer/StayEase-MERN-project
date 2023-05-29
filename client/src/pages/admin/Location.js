import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/SideBar";
import LocationForm from "../../components/admin/LocationForm";
import Footer from "../../components/Footer";

function Location() {
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar role="admin" />
        <div className="flex flex-grow">
          <div className="w-1/4">
            <Sidebar role="admin" />
          </div>
          <div className="w-3/4 mb-16 mt-14">
            <LocationForm />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Location;
