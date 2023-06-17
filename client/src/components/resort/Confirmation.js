import React from "react";
import { useSelector } from "react-redux";

function Confirmation() {
  const bookingInfo = useSelector((state) => state.booking.bookingData);
  const lastDate = bookingInfo.dates[bookingInfo.dates.length - 1];

  return (
    <>
      <div className="w-2/6 mt-4 bg-white border rounded-lg">
        <p className="p-6 text-2xl font-bold text-center">Your trip</p>
        <div className="flex items-center justify-between py-2 mx-6 my-8">
          <p className="text-xl font-semibold">Dates</p>
          <p className="text-md">
            {bookingInfo.dates[0]} to {lastDate}
          </p>
        </div>
        <div>
          <hr className="mx-4 my-8 border-gray-300" />
        </div>
        <div className="flex items-center justify-between py-2 mx-6 my-8 ">
          <p className="text-xl font-semibold">Guests</p>
          <p className="text-md">{bookingInfo.guests}</p>
        </div>
      </div>
    </>
  );
}

export default Confirmation;
