import React, { useEffect, useState } from "react";
import "../../fonts/fonts.css";
import { Bookings } from "../../api calls/users";
import { bookingInfo } from "../../redux/userBookingSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function BookingHistory() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const bookingData = useSelector((state) => state.userBookings.bookings);
  const [displayBookings, setDisplayBookings] = useState("upcoming");

  const onViewClick = (id) => {
    navigate(`/resortInfo/${id}`);
  };

  const fetchBookings = async () => {
    try {
      const response = await Bookings();
      if (response.success) {
        dispatch(bookingInfo(response.data));
      }
    } catch (error) {
      if (error.message === "500") {
        navigate("/error500");
      }
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  if (!bookingData) {
    return <p>Loading...</p>;
  }

  const today = new Date();

  const pastBookings = bookingData.filter((booking) => {
    const bookingDates = booking.booking.dates.map((date) => {
      const [dd, mm, yyyy] = date.split("-");
      return new Date(`${mm}-${dd}-${yyyy}`);
    });
    const bookingDate = bookingDates[bookingDates.length - 1];
    return bookingDate < today;
  });

  const upcomingBookings = bookingData.filter((booking) => {
    const bookingDates = booking.booking.dates.map((date) => {
      const [dd, mm, yyyy] = date.split("-");
      return new Date(`${mm}-${dd}-${yyyy}`);
    });
    const bookingDate = bookingDates[0];
    return bookingDate > today;
  });

  return (
    <>
      <div className="flex-col items-center justify-center h-screen mx-10">
        <button
          className="p-2 font-semibold bg-gray-300 border"
          onClick={() =>
            setDisplayBookings((prevDisplay) =>
              prevDisplay === "previous" ? "upcoming" : "previous"
            )
          }
        >
          {displayBookings === "previous"
            ? "Upcoming Bookings"
            : "Previous Bookings"}
        </button>

        <div className="flex">
          {displayBookings === "previous" ? (
            <div className="flex flex-col items-center w-full border">
              <p className="my-5 text-3xl text-center text-gray-300 font-oswald">
                Previous Bookings
              </p>
              {pastBookings.map((booking) => (
                <div
                  className="grid w-full grid-cols-3 p-3 mb-4 border rounded-md shadow-md auto lg:w-4/6"
                  key={booking.booking._id}
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
                    <button
                      className="w-full h-12 font-semibold bg-gray-200 rounded-md shadow lg:w-2/4"
                      onClick={onViewClick(booking.booking._id)}
                    >
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center w-1/2 border">
              <p className="my-5 text-3xl text-center text-gray-300 font-oswald">
                Upcoming Bookings
              </p>
              {upcomingBookings.map((booking) => (
                <div
                  className="grid w-full grid-cols-3 mb-4 border rounded-md shadow-md auto lg:w-4/6"
                  key={booking.booking._id}
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
                        {
                          booking.booking.dates[
                            booking.booking.dates.length - 1
                          ]
                        }
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-center p-4 mt-5">
                    <button
                      className="w-full h-12 font-semibold bg-gray-200 rounded-md shadow lg:w-2/4"
                      onClick={onViewClick(booking.booking._id)}
                    >
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default BookingHistory;
