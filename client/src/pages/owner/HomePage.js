import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/SideBar";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";


function HomePage() {
  const currentUser = useSelector((state)=>state.getUser.getOwner)
  const role = currentUser.role
  const name = currentUser.name
  return (
    <div>
       <Navbar role={role} name={name}/>
      <Sidebar />
      <Footer />
    </div>
  );
}

export default HomePage;
