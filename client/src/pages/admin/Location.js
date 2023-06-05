import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/SideBar";
import LocationForm from "../../components/admin/LocationForm";
import LocationList from "../../components/admin/LocationList";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";

function Location() {
  const currentAdmin = useSelector((state) => state.getUser.getAdmin);
  const role = currentAdmin.role;
  const name = currentAdmin.name;

  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar role={role} name={name} />
        <div className="flex flex-grow">
          <div className="w-1/4">
            <Sidebar role="admin" />
          </div>
          <div className="w-3/4 mb-16 mt-14">
            <LocationForm />
            <LocationList />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Location;
