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
      data: location,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};
