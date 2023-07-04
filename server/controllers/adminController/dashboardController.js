const Resort = require("../../models/resortModel");
const User = require("../../models/userModel");
const Owner = require("../../models/ownerModel");
const Bookings = require("../../models/BookingModel");

exports.dashboardData = async (req, res) => {
  try {
    const resortsCount = await Resort.find().count();
    const bookingsCount = await Bookings.find().count();
    const usersCount = await User.find().count();
    const hostsCount = await Owner.find().count();
    const dashboardInfo = {
      resorts: resortsCount,
      bookings: bookingsCount,
      users: usersCount,
      hosts: hostsCount,
    };
    res.send({ data: dashboardInfo, success: true });
  } catch (error) {
    res.status(500).send({ error: "An error occurred" });
  }
};
