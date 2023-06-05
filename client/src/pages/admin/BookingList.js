import React from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/SideBar";
import Footer from "../../components/Footer";
import BookingTable from "../../components/BookingTable";
import { useSelector } from "react-redux";

function BookingList() {
    const currentAdmin = useSelector((state) => state.getUser.getAdmin);
  const role = currentAdmin.role;
  const name = currentAdmin.name;
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

export default BookingList