import React from "react";
import Navbar from "../../components/Navbar";
import ResortView from "../../components/ResortView";
import Footer from "../../components/Footer";

function ResortDetail() {
  return (
    <>
      <div className="container">
        <Navbar/>
        <ResortView action="false" role="user" />
        <Footer />
      </div>
    </>
  );
}

export default ResortDetail;
