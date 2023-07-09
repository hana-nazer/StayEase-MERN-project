const Location = require("../../models/locationModel");

//add location
exports.addLocation = async (req, res) => {
  try {
    const { location } = req.body;
    if (!location) {
      return res.send({
        success: false,
        message: "Give non empty value",
      });
    }
    const newLocation = new Location(req.body);
    await newLocation.save();
    res.send({
      success: true,
      message: "added location successfully",
      data: newLocation,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: "An error occurred",
      error: error.message,
    });
  }
};

// Fetch all locations
exports.location = async (req, res) => {
  try {
    const location = await Location.find();
    res.send({ success: true, data: location });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to retrieve location" });
  }
};
