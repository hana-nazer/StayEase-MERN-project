import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postBooking } from "../../api calls/users";

function BookingInfo() {
  const navigate = useNavigate();
  const resortData = useSelector((state) => state.verifyResort.resortData);
  const bookingInfo = useSelector((state) => state.booking.bookingData);
  const totalCharge = resortData.charge_per_night * bookingInfo.no_of_days * bookingInfo.guests;
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
  const handlePayment = async () => {
    try {
      const response = await postBooking(bookingDetails, resortData._id);
      if (response.success) {
        navigate("/asd");
      }
    } catch (error) {
      // Handle error
    }
  };
  return (
    <>
      <div className="p-5 mt-4 bg-white border rounded-lg">
        <div className="flex gap-3 ">
          <div>
            <img
              src="/images/login.png"
              style={{ width: "150px", height: "100px" }}
              alt="logo"
            />
          </div>
          <div>
            <p>{resortData.name}</p>
            <p>{resortData.location}</p>
          </div>
        </div>
        <div className="">
          <p className="my-3 font-bold underline">Price details</p>
          <div>
            <p className="my-3 font-semibold">
              {resortData.charge_per_night} * {bookingInfo.no_of_days} :{" "}
              {resortData.charge_per_night * bookingInfo.no_of_days}
            </p>
            <p className="my-3 font-semibold">
              No:of guests {""}: {bookingInfo.guests}
            </p>
          </div>
        </div>
        <div className="my-3 font-bold">Total:{totalCharge}</div>
        <div className="text-center ">
          <button
            className="w-full px-8 py-3 text-white rounded-lg bg-cyan-800"
            onClick={handlePayment}
          >
            Pay now
          </button>
        </div>
      </div>
    </>
  );
}

export default BookingInfo;
