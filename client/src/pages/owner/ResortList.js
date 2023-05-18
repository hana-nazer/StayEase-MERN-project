import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function ResortList() {
    const navigate = useNavigate()
    const addResort =()=>{
      navigate('/owner/resort_register')
    }
  return (
    <>
      <Navbar role="owner" />
      <div>
        <button onClick={addResort}>Add resort</button>
      </div>
      <Footer />
    </>
  );
}

export default ResortList;
