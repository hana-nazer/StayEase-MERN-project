import React from "react";
import Navbar from "../../components/Navbar";
import ResortView from "../../components/ResortView";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";


function ResortInfo() {
  const currentAdmin = useSelector((state) => state.getUser.getAdmin);
  const role = currentAdmin.role;
  const name = currentAdmin.name;
  console.log(role,name);
  return (
    <>
      <Navbar role={currentAdmin.role} name={currentAdmin.name} />
      <ResortView action='false' role="admin" />
      <Footer />
    </>
  );
}

export default ResortInfo;
