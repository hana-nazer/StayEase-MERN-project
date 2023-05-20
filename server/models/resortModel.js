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
  address: {
    type: String,
    required: true,
  },
  no_of_guest: {
    type: Number,
    required: true,
  },
  charge_per_night: {
    type: String,
    required: true,
  },
  amenities: [
    {
      type: String,
      required: true,
    },
  ],
images:[],
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Owner",
  },
});
module.exports = mongoose.model("resorts", resortSchema);
