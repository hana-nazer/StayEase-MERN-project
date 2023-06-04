import React from 'react'
import Navbar from "../../components/Navbar";
import ResortView from "../../components/ResortView";
import Footer from "../../components/Footer";

function ResortInfo() {
  return (
    <>
     <Navbar/>
    <ResortView action='false'  role="owner" />
    <Footer />
    </>
   
  )
}

export default ResortInfo