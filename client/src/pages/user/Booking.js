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
      <div className="mb-20">
        <Navbar  role={role} name={name}/>
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
