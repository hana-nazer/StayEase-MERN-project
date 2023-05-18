import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/SideBar";
import Footer from "../../components/Footer";

function HomePage() {
  return (
    <div>
    <Navbar title="StayEase Owner" role="owner" name="owner"/>
    <Sidebar/>
    <Footer/>
    </div>
  );
}

export default HomePage;
