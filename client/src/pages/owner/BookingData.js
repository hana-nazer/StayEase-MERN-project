import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/SideBar";
import Footer from "../../components/Footer";
import BookingTable from "../../components/BookingTable";
import { useSelector } from "react-redux";
import { Bookings } from "../../api calls/owner";
import { Navigate, useNavigate } from "react-router-dom";

function BookingData() {
  const [details, setDetails] = useState([]);
  const [showAllBookings, setShowAllBookings] = useState(true);

  const currentOwner = useSelector((state) => state.getUser.getOwner);
  const role = currentOwner.role;
  const name = currentOwner.name;

  const fetchBookings = async () => {
    try {
      const response = await Bookings();
      if (response.success) {
        setDetails(response.data);
      }
    } catch (error) {
      if(error.message==="500"){
        Navigate('/owner/error500')
      }
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  const toggleBookings = () => {
    setShowAllBookings(!showAllBookings);
  };

  // Filter the bookings based on showAllBookings flag
  const filteredBookings = showAllBookings
    ? details
    : details.filter((booking) => {
        const today = new Date();
        const checkInDates = booking.dates.map((date) => {
          const [dd, mm, yyyy] = date.split("-");
          return new Date(`${mm}-${dd}-${yyyy}`);
        });
        const bookingDate = checkInDates[0];
        return bookingDate > today;
      });

  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar role={role} name={name} />
        <Sidebar role={role} />
        <div className="container w-full mx-12 mb-16 overflow-x-scroll lg:ml-52 lg:w-3/4 mt-14">
          <div className="flex items-center justify-end">
            <button
              className="p-4 m-4 text-center bg-gray-300"
              onClick={toggleBookings}
            >
              {showAllBookings ? "Show Upcoming Bookings" : "Show All Bookings"}
            </button>
          </div>
          <BookingTable details={filteredBookings} role={role} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default BookingData;
