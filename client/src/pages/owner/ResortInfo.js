import React from 'react'
import Navbar from "../../components/Navbar";
import ResortView from "../../components/ResortView";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";


function ResortInfo() {
  const currentUser = useSelector((state)=>state.getUser.getOwner)
  const role = currentUser.role
  const name = currentUser.name
  return (
    <>
    <Navbar role={role} name={name}/>
    <ResortView action='false'  role={role} />
    <Footer />
    </>
   
  )
}

export default ResortInfo