import React from "react";

function BookingTable({ details, role }) {
  const user = role;
  const bookings = details
    .map((booking, index) => ({
      resortName: booking.resort,
      customerName: booking.user,
      phone: booking.phone,
      checkIn: booking.dates[0],
      checkOut: booking.dates[booking.dates.length - 1],
      numOfGuests: booking.numberOfGuests,
      totalCharge: booking.totalCharge,
    }))
    .reverse();

  return (
    <>
      <table className="w-full">
        <caption className="p-2">Booking list</caption>
        <thead className={`text-white ${user ? "bg-teal-900" : "bg-gray-700"}`}>
          <tr>
            <th className="p-2 border border-white">Resort</th>
            <th className="p-2 border border-white">Customer Name</th>
            <th className="p-2 border border-white">Phone</th>
            <th className="p-2 border border-white">Check-in</th>
            <th className="p-2 border border-white">Check-out</th>
            <th className="p-2 border border-white">Guests</th>
            <th className="p-2 border border-white">Charge</th>
            <th className="p-2 border border-white">View</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-200"}
            >
              <td className="p-2 border border-gray-400">
                {booking.resortName}
              </td>
              <td className="p-2 border border-gray-400">
                {booking.customerName}
              </td>
              <td className="p-2 border border-gray-400">{booking.phone}</td>
              <td className="p-2 border border-gray-400">{booking.checkIn}</td>
              <td className="p-2 border border-gray-400">{booking.checkOut}</td>
              <td className="p-2 border border-gray-400">
                {booking.numOfGuests}
              </td>
              <td className="p-2 border border-gray-400">
                {booking.totalCharge}
              </td>
              <td className="p-2 border border-gray-400"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BookingTable;
