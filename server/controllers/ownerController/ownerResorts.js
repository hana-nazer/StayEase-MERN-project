const Owner = require("../../models/ownerModel");
const Resort = require("../../models/resortModel");
const Location = require("../../models/locationModel");
const Category = require("../../models/CategoryModel");
const Booking = require("../../models/BookingModel");
const User = require("../../models/userModel");

// register resort
exports.registerResort = async (req, res) => {
  try {
    const newResort = new Resort({
      name: req.body.name,
      location: req.body.place,
      description: req.body.description,
      address: req.body.address,
      status: "pending",
      charge_per_night: req.body.charge,
      no_of_guest: req.body.guest,
      amenities: req.body.amenities,
      owner: req.userId,
      images: req.body.imgUrls,
      category: req.body.category,
    });

    // Save the new resort to the database
    const savedResort = await newResort.save();

    res.send({
      success: true,
      message: "Resort registered successfully",
      data: savedResort,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// edit resort
exports.editResort = async (req, res) => {
  try {
    const updatedData = {
      name: req.body.name,
      location: req.body.place,
      description: req.body.description,
      address: req.body.address,
      charge_per_night: req.body.charge,
      no_of_guest: req.body.guest,
      amenities: req.body.amenities,
      owner: req.userId,
      images: req.body.imgUrls,
      category: req.body.category,
    };

    const updatedResort = await Resort.findOneAndUpdate(
      { _id: req.params.id, owner: req.userId },
      { $set: updatedData },
      { new: true }
    );
    res.send({
      success: true,
      message: "Resort Data updated",
      data: updatedResort,
    });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

// resorts list
exports.getResorts = async (req, res) => {
  try {
    const ownerId = req.userId;
    const resorts = await Resort.find({ owner: ownerId });
    res.send({ success: true, data: resorts });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve  resorts" });
  }
};

// resort detailed view
exports.resortData = async (req, res) => {
  try {
    const resort = await Resort.findById(req.params.resortId);
    if (!resort) {
      return res.send({ message: "Resort not found" });
    }
    const owner = resort.owner;
    const ownerData = await Owner.findById(owner);
    res.send({ success: true, data: resort, owner: ownerData });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve resort details" });
  }
};

// fetch location
exports.location = async (req, res) => {
  try {
    const location = await Location.find();
    res.send({ success: true, data: location });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve location" });
  }
};

// Fetch all category
exports.category = async (req, res) => {
  try {
    const category = await Category.find();
    res.send({ success: true, data: category });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve category" });
  }
};

// bookings
exports.bookings = async (req, res) => {
  try {
    const allBookings = await Booking.find();
    const resortIds = allBookings.map((booking) => booking.resort);
    const resorts = await Resort.find({
      _id: { $in: resortIds },
      owner: req.userId,
    });

    const bookingData = [];

    for (const resort of resorts) {
      const resortBookings = await Booking.find({ resort: resort._id });
      const mappedBookings = [];

      for (const booking of resortBookings) {
        const user = await User.findById(booking.user);
        const mappedBooking = {
          _id: booking._id,
          phone: booking.phone,
          numberOfGuests: booking.numberOfGuests,
          resort: resort.name,
          no_of_days: booking.no_of_days,
          dates: booking.dates,
          totalCharge: booking.totalCharge,
          user: user.name,
        };

        mappedBookings.push(mappedBooking);
      }

      bookingData.push(...mappedBookings);
    }

    res.send({ success: true, data: bookingData });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to retrieve bookings" });
  }
};
