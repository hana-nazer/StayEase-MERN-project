const mongoose = require("mongoose");
const categorySchema = new mongoose.Schema(
  {
    category: String,
    imageUrl: String
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("category", categorySchema);
