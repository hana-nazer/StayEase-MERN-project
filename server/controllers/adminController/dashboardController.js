const Resort = require("../../models/resortModel");
const User = require("../../models/userModel");
const Owner = require("../../models/ownerModel");
const Bookings = require("../../models/BookingModel");

// fetching data for dashboard
exports.dashboardData = async (req, res) => {
  try {
    const bookings = await Bookings.find();
    const monthNames = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    const monthCounts = {};

    bookings.forEach((booking) => {
      const parts = booking.dates[0].split("-");
      const isoDateString = `${parts[2]}-${parts[1]}-${parts[0]}`;
      const date = new Date(isoDateString);
      const month = date.getMonth();
      const monthName = monthNames[month];

      if (monthCounts.hasOwnProperty(monthName)) {
        monthCounts[monthName]++;
      } else {
        monthCounts[monthName] = 1;
      }
    });

    const resortsCount = await Resort.find().count();
    const bookingsCount = await Bookings.find().count();
    const usersCount = await User.find().count();
    const hostsCount = await Owner.find().count();
    const dashboardInfo = {
      resorts: resortsCount,
      bookings: bookingsCount,
      users: usersCount,
      hosts: hostsCount,
      months: monthCounts,
    };
    res.send({ data: dashboardInfo, success: true });
  } catch (error) {
    res
      .status(500)
      .json({
       
        message: "An error occurred while fetching dashboard data",
      });
  }
};
