import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BookingData from "../../components/resort/BookingData";

function Booking() {
  return (
    <div>
      <Navbar role="user" name="user" />
      <BookingData/>
      <Footer />
    </div>
  );
}

export default Booking;