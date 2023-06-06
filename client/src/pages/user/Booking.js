import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BookingData from "../../components/resort/BookingData";

function Booking() {
  return (
    <div>
      <div className="mb-20">
        <Navbar />
      </div>
      <div className="container flex items-center justify-center mx-auto h-[32rem]">
        <div className="w-2/5 p-4 border">
          <BookingData />
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Booking;
