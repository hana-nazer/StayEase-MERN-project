const Owner = require("../../models/ownerModel");
const Resort = require("../../models/resortModel");
const Location = require("../../models/locationModel");

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
    });

    // Save the new resort to the database
    const savedResort = await newResort.save();

    res.send({
      success: true,
      message: "Resort registered successfully",
      data: savedResort,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
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
