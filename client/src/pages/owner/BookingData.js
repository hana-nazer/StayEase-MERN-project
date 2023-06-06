import React from 'react'
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/SideBar";
import Footer from "../../components/Footer";
import BookingTable from "../../components/BookingTable";
import { useSelector } from "react-redux";

function BookingData() {
    const currentOwner = useSelector((state) => state.getUser.getOwner);
    const role = currentOwner.role;
    const name = currentOwner.name;
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar role={role} name={name} />
        <div className="flex flex-grow">
          <div className="w-1/6">
            <Sidebar role={role} />
          </div>
          <div className="container w-3/4 mb-16 m mt-14">
            <BookingTable/>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default BookingData