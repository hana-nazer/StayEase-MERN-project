const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  numberOfGuests: {
    type: Number,
    required: true,
  },

  resort: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Resort",
  },
  no_of_days: {
    type: Number,
    required: true,
  },
  checkIn: {
    type: String,
    required: true,
  },
  checkOut: {
    type: String,
    required: true,
  },
  totalCharge: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("Bookings", bookingSchema);
