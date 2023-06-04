import React from "react";
import Navbar from "../../components/Navbar";
import ResortView from "../../components/ResortView";
import Footer from "../../components/Footer";

function ResortDetailedView() {
  return (
    <>
      <Navbar />
      <ResortView role="admin" />
      <Footer />
    </>
  );
}

export default ResortDetailedView;
