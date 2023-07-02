import React, { useEffect } from "react";
import "../../fonts/fonts.css";
import { Bookings } from "../../api calls/users";
import { bookingInfo } from "../../redux/userBookingSlice";
import { useDispatch, useSelector } from "react-redux";

function AllBookings() {
  const dispatch = useDispatch();
  const bookingData = useSelector((state) => state.userBookings.bookings);
  const fetchBookings = async () => {
    try {
      const response = await Bookings();
      if (response.success) {
        dispatch(bookingInfo(response.data));
      }
    } catch (error) {}
  };

  console.log("bookingData", bookingData);

  useEffect(() => {
    fetchBookings();
  }, []);

  if (!bookingData) {
    // Data is being fetched, show loading spinner or message
    return <p>Loading...</p>;
  }

  return (
    <>
      <p className="m-10 text-3xl text-center text-gray-300 font-oswald">
        All Bookings
      </p>

      <div className="container justify-center h-full mx-auto border border-red-300 ">
        {bookingData.map((booking) => (
          <div
            className="grid w-full grid-cols-3 mb-4 border rounded-md shadow-md h-1/4 lg:w-4/6"
            key={booking._id}
          >
            <div className="grid grid-cols-2 col-span-2">
              <div className="flex items-center justify-center py-14 lg:py-0">
                <img
                  src="/images/cover.jpg"
                  className="w-24 h-24 lg:h-36 lg:w-60"
                  alt="not found"
                />
              </div>
              <div className="p-4 mt-5">
                <p className="font-medium lg:font-bold">{booking.resort}</p>
                <p className="font-medium lg:font-bold">
                  {booking.totalCharge}
                </p>
                <p className="font-semibold">{booking.dates[0]} to {booking.dates[booking.dates.length-1]}</p>
              </div>
            </div>
            <div className="flex justify-center p-4 mt-5">
              <button className="w-full h-12 font-semibold bg-gray-200 rounded-md shadow lg:w-2/4">
                View
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default AllBookings;
