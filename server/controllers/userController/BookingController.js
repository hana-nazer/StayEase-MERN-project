const Booking = require("../../models/BookingModel");

exports.postBooking = async (req, res) => {
  try {
    const bookingData = new Booking({
      name: req.body.name,
      phone: req.body.phone,
      numberOfGuests: req.body.guests,
      resort: req.body.resortId,
      no_of_days: req.body.no_of_days,
      checkIn: req.body.checkIn,
      checkOut: req.body.checkOut,
      totalCharge: req.body.charge,
    });

    const bookedResort = await bookingData.save();
    res.send({
      success: true,
      message: "Booked successfully",
      data: bookedResort,
    });
    console.log(bookingDetails);
  } catch (error) {}
};
