const mongoose = require("mongoose");
const locationShema = new mongoose.Schema(
  {
    location: String
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("locations", locationShema);
