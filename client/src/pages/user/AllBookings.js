import React from "react";
import "../../fonts/fonts.css";

function AllBookings() {
  return (
    <>
      <p className="m-10 text-3xl text-center text-gray-300 font-oswald">
        All Bookings
      </p>

      <div className="flex justify-center h-screen">
        <div className="grid w-full grid-cols-3 mb-4 border rounded-md shadow-md h-1/4 lg:w-3/6">
          <div className="grid grid-cols-2 col-span-2">
            <div className="flex items-center justify-center p-4 py-14 lg:py-0">
              <img
                src="/images/cover.jpg"
                className="w-24 h-24 lg:h-36 lg:w-60"
                alt="not found"
              />
            </div>
            <div className="p-4 mt-5">
              <p className="font-medium lg:font-bold">Dates</p>
              <p className="font-medium lg:font-bold">charge</p>
              <p className="font-semibold">No of guests</p>
            </div>
          </div>
          <div className="flex justify-center p-4 mt-5">
            <button className="w-full h-12 font-semibold bg-gray-200 rounded-md shadow lg:w-2/4">
              View
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default AllBookings;
