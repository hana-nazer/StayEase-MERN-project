import React from "react";
import Navbar from "../../components/Navbar";
import ResortView from "../../components/ResortView";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";

function ResortDetailedView() {
  const currentAdmin = useSelector((state) => state.getUser.getAdmin);
  const role = currentAdmin.role;
  const name = currentAdmin.name;
  return (
    <>
      <Navbar role={role} name={name} />
      <ResortView role="admin" />
      <Footer />
    </>
  );
}

export default ResortDetailedView;
