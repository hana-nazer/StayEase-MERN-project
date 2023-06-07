const Booking = require("../../models/BookingModel");

// fetching already booked dates of particular resort
exports.fetchDisabledDates = async (req, res) => {
  try {
    const { resortId } = req.params;
    const bookings = await Booking.find({ resort: resortId });
    const bookedDates = bookings.map((booking) => booking.dates).flat();
    res.send({ success: true, disabledDates: bookedDates });
  } catch (error) {
    res.status(500).json({ message: "Unable to get dates" });
  }
};

// save booking to db
exports.postBooking = async (req, res) => {
  try {
    const bookingData = new Booking({
      name: req.body.name,
      phone: req.body.phone,
      numberOfGuests: req.body.guests,
      resort: req.body.resortId,
      no_of_days: req.body.no_of_days,
      dates: req.body.dates,
      totalCharge: req.body.charge,
    });
    const bookedResort = await bookingData.save();
    res.send({
      success: true,
      message: "Booked successfully",
      data: bookedResort,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};
