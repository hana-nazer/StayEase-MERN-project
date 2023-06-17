import React from "react";
import BookingInfo from "../../components/resort/BookingInfo";
import Confirmation from "../../components/resort/Confirmation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";

function BookingDetails() {
  const user = useSelector((state) => state.getUser.getUser);
  const role = user ? user.role : null;
  const name = user ? user.name : null;
  return (
    <>
      <Navbar role={role} name={name} />
      <div className="flex items-center justify-center h-screen bg-light-white">
        <div className="container flex justify-center gap-4 mx-auto">
          {/* <Confirmation /> */}
          <BookingInfo />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BookingDetails;
