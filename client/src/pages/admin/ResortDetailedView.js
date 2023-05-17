import React from "react";
import Navbar from "../../components/Navbar";
import ResortView from "../../components/ResortView";
import Footer from "../../components/Footer";

function ResortDetailedView() {
  return (
    <>
      <Navbar role="admin" name="admin" />
      <ResortView />
      <Footer />
    </>
  );
}

export default ResortDetailedView;
