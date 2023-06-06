import React from "react";
import BookingInfo from "../../components/resort/BookingInfo";
import Confirmation from "../../components/resort/Confirmation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

function BookingDetails() {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <div className="container flex justify-center gap-4 mx-auto">
          <Confirmation />
          <BookingInfo />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BookingDetails;
