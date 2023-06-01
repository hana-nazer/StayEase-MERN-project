import React from 'react'
import Navbar from "../../components/Navbar";
import ResortView from "../../components/ResortView";
import Footer from "../../components/Footer";

function ResortInfo() {
  return (
    <>
     <Navbar role="owner" name="owner" />
    <ResortView action='false'  />
    <Footer />
    </>
   
  )
}

export default ResortInfo