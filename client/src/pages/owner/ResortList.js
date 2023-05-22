import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import Sidebar from "../../components/SideBar";
import Resorts from "./Resorts";

function ResortList() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar role="owner" />
        <div className="grid h-full grid-cols-6">
          <div className="col-span-1">
            <Sidebar role="owner" />
          </div>
          <div className="col-span-5 p-4 mt-20 mb-16 ">
            <Resorts />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default ResortList;
