import React, { useEffect, useState } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/SideBar";
import Footer from "../../components/Footer";
import BookingTable from "../../components/BookingTable";
import { Bookings } from "../../api calls/admin";
import { useSelector } from "react-redux";

function BookingList() {
  const [details, setDetails] = useState([]);
  const currentAdmin = useSelector((state) => state.getUser.getAdmin);
  const role = currentAdmin.role;
  const name = currentAdmin.name;

  const fetchBookings = async () => {
    try {
      const response = await Bookings();
      if (response.success) {
        setDetails(response.data);
        console.log(response);
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar role={role} name={name} />
        <div className="flex flex-grow">
          <div className="w-1/6">
            <Sidebar role={role} />
          </div>
          <div className="container w-3/4 mb-16 m mt-14">
            <BookingTable details={details} />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default BookingList;
