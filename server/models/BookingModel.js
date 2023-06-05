const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  dates: {
    type: [],
    required: true
  },
  numberOfGuests: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  phone: {
    type: Number,
    required: true
  },
  resort: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Resort'
  }
});

module.exports = mongoose.model('Bookings', bookingSchema);
