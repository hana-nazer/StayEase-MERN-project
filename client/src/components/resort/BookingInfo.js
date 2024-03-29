import React from "react";
import { useSelector } from "react-redux";
import { loadStripe } from "@stripe/stripe-js";
import { userApi } from "../../api calls/axios";
import "../../fonts/fonts.css";
import Error402 from "../error/userError/Error402";

function BookingInfo() {
  const resortData = useSelector((state) => state.verifyResort.resortData);
  const bookingInfo = useSelector((state) => state.booking.bookingData);
  const totalCharge =
    resortData.charge_per_night * bookingInfo.no_of_days * bookingInfo.guests;
  const lastDate = bookingInfo.dates[bookingInfo.dates.length - 1];
  const bookingDetails = {
    name: bookingInfo.name,
    phone: bookingInfo.phone,
    guests: bookingInfo.guests,
    resortId: resortData._id,
    no_of_days: bookingInfo.no_of_days,
    dates: bookingInfo.dates,
    checkIn: bookingInfo.dates[0],
    checkOut: lastDate,
    charge: totalCharge,
  };

  const makePayment = async () => {
    const stripe = await loadStripe(
      "pk_test_51NInNoSHtjRpyBDQv24akDwPFsTulGzPE4wg4B0viMQJCyEn5xD5LDl8V05ybuBdfpaPaN3ZEa87vTSEkC5agse900Be2DAUhl"
    );
    const body = { bookingDetails };
    const headers = {
      "Content-Type": "application/json",
    };

    try {
      const response = await userApi.post("/create-checkout-session", body, {
        headers: headers,
      });
      const session = response.data;
      const result = stripe.redirectToCheckout({
        sessionId: session.id,
      });
      if (result.error) {
        return <Error402 />;
      } else {
      }
    } catch (error) {
      return <Error402 />;
    }
  };
  return (
    <>
      <div className="w-full bg-white border rounded-lg lg:w-2/6">
        <p className="py-4 text-3xl font-bold text-center text-gray-300 font-oswald">
          Your trip
        </p>
        <div className="flex justify-between px-2">
          <div>
            <img
              src={resortData.images[0]}
              style={{ width: "150px", height: "100px" }}
              alt="logo"
            />
          </div>
          <div className="lg:ml-5">
            <p className="text-lg font-medium lg:text-xl">{resortData.name}</p>
            <p className="font-medium">{resortData.location}</p>
          </div>
        </div>

        <div className="flex items-center justify-between py-2 mx-6 ">
          <p className="text-lg font-semibold lg:text-xl">Dates</p>
          <p className="text-sm md:text-md">
            {bookingInfo.dates[0]} to {lastDate}
          </p>
        </div>

        <div className="flex items-center justify-between py-2 mx-6 ">
          <p className="text-lg font-semibold lg:text-xl">Guests</p>
          <p className="text-sm md:text-md">{bookingInfo.guests}</p>
        </div>

        <div className="flex items-center justify-between py-2 mx-6 ">
          <p className="text-xl font-semibold">Total</p>
          <p className="font-semibold text-md"> {totalCharge}</p>
        </div>

        <div className="py-5 text-center">
          <button
            className="w-2/3 px-8 py-3 text-xl font-semibold text-white rounded-lg bg-nav-color"
            onClick={makePayment}
          >
            Pay now
          </button>
        </div>
      </div>
    </>
  );
}
export default BookingInfo;
