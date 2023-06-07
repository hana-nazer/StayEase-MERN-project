const Booking = require("../../models/BookingModel");

// fetching already booked dates of particular resort
exports.fetchDisabledDates = async (req, res) => {
  try {
    const { resortId } = req.params;

    // Find all bookings for the specified resort
    const bookings = await Booking.find({ resort: resortId });

    // Extract the booked dates from the bookings
    const bookedDates = bookings.map((booking) => booking.dates).flat();

    res.status(200).json({success:true, disabledDates: bookedDates });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

// submit booking
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
    console.log(error);
  }
};
