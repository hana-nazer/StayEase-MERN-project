import React from "react";

function BookingTable() {
  const bookings = [
    {
      resortName: "Resort A",
      customerName: "John Doe",
      phone: "123-456-7890",
      checkIn: "2023-06-10",
      checkOut: "2023-06-15",
      numOfGuests: 2,
      totalCharge: "$500",
    },
    {
      resortName: "Resort B",
      customerName: "Jane Smith",
      phone: "987-654-3210",
      checkIn: "2023-07-01",
      checkOut: "2023-07-07",
      numOfGuests: 4,
      totalCharge: "$800",
    },
    {
      resortName: "Resort C",
      customerName: "Mark Johnson",
      phone: "555-123-4567",
      checkIn: "2023-08-15",
      checkOut: "2023-08-20",
      numOfGuests: 1,
      totalCharge: "$300",
    },
    {
      resortName: "Resort D",
      customerName: "Sarah Wilson",
      phone: "111-222-3333",
      checkIn: "2023-09-05",
      checkOut: "2023-09-12",
      numOfGuests: 3,
      totalCharge: "$650",
    },
  ];

  return (
    <>
      <table className="w-full ">
        <caption className="p-2">Booking list</caption>
        <thead className="text-white bg-gray-700">
          <tr>
            <th className="p-2 border border-white">resort</th>
            <th className="p-2 border border-white">Customer Name</th>
            <th className="p-2 border border-white">Phone</th>
            <th className="p-2 border border-white">checkIn</th>
            <th className="p-2 border border-white">checkOut</th>
            <th className="p-2 border border-white">Guests</th>
            <th className="p-2 border border-white">Charge</th>
            <th className="p-2 border border-white">View</th>
          </tr>
        </thead>
        <tbody>
          {bookings.map((booking, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-200"} // Alternate row colors
            >
              <td className="p-2 border border-gray-400">{booking.resortName}</td>
              <td className="p-2 border border-gray-400">{booking.customerName}</td>
              <td className="p-2 border border-gray-400">{booking.phone}</td>
              <td className="p-2 border border-gray-400">{booking.checkIn}</td>
              <td className="p-2 border border-gray-400">{booking.checkOut}</td>
              <td className="p-2 border border-gray-400">{booking.numOfGuests}</td>
              <td className="p-2 border border-gray-400">{booking.totalCharge}</td>
              <td className="p-2 border border-gray-400"></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default BookingTable;
