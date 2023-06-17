import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import BookingData from "../../components/resort/BookingData";
import { useSelector } from "react-redux";

function Booking() {
  const user = useSelector((state) => state.getUser.getUser);
  const role = user ? user.role : null;
  const name = user ? user.name : null;
  return (
    <div>
      <div className="">
        <Navbar role={role} name={name} />
      </div>
      {/* <div className="bg-light-white"> */}
      <div className="container flex items-center justify-center h-screen mx-auto">
        <div className="w-full p-4 bg-white border xl:w-2/5">
          <BookingData />
        </div>
      {/* </div> */}
      </div>

      <Footer />
    </div>
  );
}

export default Booking;
