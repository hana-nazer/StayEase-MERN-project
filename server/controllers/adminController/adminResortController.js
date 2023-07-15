const Resort = require("../../models/resortModel");
const Owner = require("../../models/ownerModel");
const Location = require("../../models/locationModel");
const Booking = require("../../models/BookingModel");
const User = require("../../models/userModel");

// getPending resorts in for approval
exports.getPendingResorts = async (req, res) => {
  try {
    const pendingResorts = await Resort.find({ status: "pending" });
    res.send({ success: true, data: pendingResorts });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve pending resorts" });
  }
};

// Get specific resort details for approval
exports.getResortData = async (req, res) => {
  try {
    const resort = await Resort.findById(req.params.resortId);
    if (!resort) {
      return res
        .status(404)
        .json({ success: false, message: "Resort not found" });
    }
    const ownerData = await Owner.findById(resort.owner);
    res.send({ success: true, data: resort, owner: ownerData });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve resort details" });
  }
};

// Review resort for approval/rejection
exports.reviewResort = async (req, res) => {
  try {
    const { resortId, action } = req.body;
    const resort = await Resort.findById(resortId);
    if (!resort) {
      return res.send({
        success: false,
        message: "Resort not found",
      });
    }
    // Update the resort's status based on the provided value
    if (action === "Approve") {
      resort.status = "approved";
      const updatedResort = await resort.save();
      res.send({
        success: true,
        message: "Resort review completed successfully",
        data: updatedResort,
      });
    }
    if (action === "Reject") {
      resort.status = "rejected";
      const updatedResort = await resort.save();
      res.send({
        success: false,
        message: "Rejected the resort",
        data: updatedResort,
      });
    }
  } catch (error) {
    res.status(500).send({
      message: "An error occurred",
    });
  }
};

// Get list of approved resorts
exports.resortList = async (req, res) => {
  try {
    const resorts = await Resort.find({ status: "approved" });
    res.send({ success: true, data: resorts });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve resorts" });
  }
};

// Get resort details of an approved resort
exports.resortData = async (req, res) => {
  try {
    const resort = await Resort.findById(req.params.resortId);
    if (!resort) {
      return res.status(404).json({ message: "Resort not found" });
    }
    const owner = resort.owner;
    const ownerData = await Owner.findById(owner);
    res.send({ success: true, data: resort, owner: ownerData });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve resort details" });
  }
};

// booking details
exports.bookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    const resortIds = bookings.map((booking) => booking.resort);
    const users = bookings.map((booking) => booking.user);
    const userNames = await User.find({ _id: { $in: users } }).select("name");
    const resortNames = await Resort.find({ _id: { $in: resortIds } }).select(
      "name"
    );
    const bookingData = bookings.map((booking) => ({
      _id: booking._id,
      phone: booking.phone,
      numberOfGuests: booking.numberOfGuests,
      resort:
        resortNames.find((resort) => resort._id.equals(booking.resort))?.name ||
        "",
      no_of_days: booking.no_of_days,
      dates: booking.dates,
      totalCharge: booking.totalCharge,
      user: userNames.find((user) => user._id.equals(booking.user))?.name || "",
      __v: booking.__v,
    }));
    res.send({ success: true, data: bookingData });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve bookings" });
  }
};
