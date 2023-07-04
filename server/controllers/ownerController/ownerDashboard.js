const Resort = require("../../models/resortModel");
const Booking = require("../../models/BookingModel");

exports.ownerDashboard = async (req, res) => {
  const ownerId = req.userId;
  try {
    const resorts = await Resort.find({ owner: ownerId }).select("_id");
    const resortIds = resorts.map((resort) => resort._id);
    const bookings = await Booking.find({ resort: { $in: resortIds } }).count();
    const resortCount = await Resort.find({ owner: ownerId }).count();
    res.send({ bookings, resortCount });
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while fetching the bookings." });
  }
};
