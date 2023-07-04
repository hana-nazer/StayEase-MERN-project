import React from "react";
import BookingHistory from "../../components/user/BookingHistory";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { useSelector } from "react-redux";

function AllBookings() {
  const user = useSelector((state) => state.getUser.getUser);
  const role = user ? user.role : null;
  const name = user ? user.name : null;
  return (
    <>
      <Navbar role={role} name={name} />
      <div className="my-20">
        <BookingHistory />
      </div>

      <Footer />
    </>
  );
}

export default AllBookings;
