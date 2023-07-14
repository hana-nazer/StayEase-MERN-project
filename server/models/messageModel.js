const mongoose = require("mongoose");

const messageSchema = mongoose.Schema(
  {
    message: {
      text: { type: String, required: true },
    },
    users: { type: Array },
    sender: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      refPath: "senderModel",
    },
    senderModel: {
      type: String,
      required: true,
      enum: ["user", "owner"],
    },
  },
  {
    timestamps: true,
  }
);
const messageModel = mongoose.model("Message", messageSchema);
module.exports = messageModel;
