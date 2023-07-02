const Booking = require("../../models/BookingModel");
const Resort = require("../../models/resortModel");
require("dotenv").config();
const stripe = require("stripe")(process.env.STRIPE_KEY);

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

// payment and saving booking
exports.makePayment = async (req, res) => {
  try {
    const { bookingDetails } = req.body;
    const resortId = bookingDetails.resortId;
    const resort = await Resort.findById(resortId);
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "inr",
            product_data: {
              name: resort.name,
            },
            unit_amount: bookingDetails.charge * 100,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: "http://localhost:3000/success",
      cancel_url: "http://localhost:3000/cancel",
    });

    // saving the booking data
    const bookingData = new Booking({
      name: bookingDetails.name,
      phone: bookingDetails.phone,
      numberOfGuests: bookingDetails.guests,
      resort: bookingDetails.resortId,
      no_of_days: bookingDetails.no_of_days,
      dates: bookingDetails.dates,
      totalCharge: bookingDetails.charge,
      user: req.userId,
      transactionId: session.id,
    });
    const bookedResort = await bookingData.save();
    res.json({ id: session.id, message: "success", success: true });
  } catch (error) {
    console.log(error);
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
      user: req.userId,
      transactionId: req.body.transactionId,
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

// feching bookings of particular user
exports.bookings = async (req, res) => {
  try {
    const userId = req.userId;
    const bookings = await Booking.find({ user: userId });
    bookings.map((booking) => {
      console.log(booking.resort);
    });
    res.send({ success: true, data: bookings });
  } catch (error) {
    res.status(500).json({ message: "Unable to get Bookings" });
  }
};
