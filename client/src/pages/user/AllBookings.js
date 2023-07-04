import React, { useEffect } from "react";
import "../../fonts/fonts.css";
import { Bookings } from "../../api calls/users";
import { bookingInfo } from "../../redux/userBookingSlice";
import { useDispatch, useSelector } from "react-redux";

function AllBookings() {
  const dispatch = useDispatch();
  const bookingData = useSelector((state) => state.userBookings.bookings);
  console.log(bookingData);

  const fetchBookings = async () => {
    try {
      const response = await Bookings();
      if (response.success) {
        dispatch(bookingInfo(response.data));
      }
    } catch (error) {}
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  if (!bookingData) {
    return <p>Loading...</p>;
  }

  const today = new Date();
  const upcomingBookings = bookingData.filter((booking) => {
    const bookingDate = new Date(booking.booking.dates[0]);
    return bookingDate > today;
  });

  return (
    <>
      <div className="container justify-center mx-auto border border-red-300">
        <div className="flex">
          <div className="w-1/2 border">
            <p className="m-10 text-3xl text-center text-gray-300 font-oswald">
              All Bookings
            </p>

            <div className="grid w-full grid-cols-3 mb-4 border rounded-md shadow-md auto lg:w-4/6">
              {bookingData.map((booking) => {
                return (
                  <>
                    <div
                      className="grid grid-cols-2 col-span-2"
                      key={booking.id}
                    >
                      <div className="flex items-center justify-center py-14 lg:py-0">
                        <img
                          src={booking.resortData.imageUrl}
                          className="w-24 h-24 lg:h-36 lg:w-60"
                          alt="not found"
                        />
                      </div>
                      <div className="p-4 mt-5">
                        <p className="font-medium lg:font-bold">
                          {booking.resortData.name}
                        </p>
                        <p className="font-medium lg:font-bold">
                          {booking.booking.totalCharge}
                        </p>

                        <p className="font-semibold">
                          {booking.booking.dates[0]} to{" "}
                          {
                            booking.booking.dates[
                              booking.booking.dates.length - 1
                            ]
                          }
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center p-4 mt-5">
                      <button className="w-full h-12 font-semibold bg-gray-200 rounded-md shadow lg:w-2/4">
                        View
                      </button>
                    </div>
                  </>
                );
              })}
            </div>
          </div>

          <div className="w-1/2">
            <p className="m-10 text-3xl text-center text-gray-300 font-oswald">
              Upcoming Bookings
            </p>
            {upcomingBookings.map((booking) => (
              <div
                className="grid w-full grid-cols-3 mb-4 border rounded-md shadow-md auto lg:w-4/6"
                key={booking._id}
              >
                <div className="grid grid-cols-2 col-span-2">
                  <div className="flex items-center justify-center py-14 lg:py-0">
                    <img
                      src={booking.resortData.imageUrl}
                      className="w-24 h-24 lg:h-36 lg:w-60"
                      alt="not found"
                    />
                  </div>
                  <div className="p-4 mt-5">
                    <p className="font-medium lg:font-bold">
                      {" "}
                      {booking.resortData.name}
                    </p>
                    <p className="font-medium lg:font-bold">
                      {booking.booking.totalCharge}
                    </p>
                    <p className="font-semibold">
                      {booking.booking.dates[0]} to{" "}
                      {booking.booking.dates[booking.booking.dates.length - 1]}
                    </p>
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
        </div>
      </div>
    </>
  );
}

export default AllBookings;
