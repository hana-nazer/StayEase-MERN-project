import React from "react";
import Navbar from "../../components/Navbar";
import ResortView from "../../components/ResortView";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";

function ResortDetail() {
  const user = useSelector((state) => state.getUser.getUser);
  const role = user ? user.role : null;
  const name = user ? user.name : null;
  return (
    
    <>
      <div className="container" >
        <Navbar role={role} name={name}/>
        <ResortView action="false" role="user" />
        <Footer />
      </div>
    </>
  );
}

export default ResortDetail;
