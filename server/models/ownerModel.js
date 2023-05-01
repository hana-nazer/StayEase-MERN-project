const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phone_number: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("owners", ownerSchema);
