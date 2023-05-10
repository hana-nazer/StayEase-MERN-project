const mongoose = require("mongoose");

const resortSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "pending",
  },
  rooms: [
    {
      roomNumber: {
        type: Number,
        required: true,
      },
      category: {
        type: String,
        required: true,
      },
      maxGuests: {
        type: Number,
        required: true,
      },
      facilities: {
        type: [String],
        required: true,
      },
    },
  ],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Owner",
  },
});
module.exports = mongoose.model("resorts", resortSchema);
