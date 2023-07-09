const Resort = require("../../models/resortModel");
const Booking = require("../../models/BookingModel");

exports.ownerDashboard = async (req, res) => {
  const ownerId = req.userId;
  try {
    const resorts = await Resort.find({ owner: ownerId }).select("_id");
    const resortIds = resorts.map((resort) => resort._id);

    // Get bookings for the owner's resorts
    const bookings = await Booking.find({ resort: { $in: resortIds } });

    // Calculate monthly booking counts
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

    const resortCount = await Resort.find({ owner: ownerId }).count();
    const dashboardInfo = {
      bookingsCount: bookings.length,
      resortCount: resortCount,
      months: monthCounts,
    };
    res.send({ data: dashboardInfo, success: true });
  } catch (error) {
    res
      .status(500)
      .send({
        success: false,
        message: "An error occurred while fetching the bookings.",
      });
  }
};
