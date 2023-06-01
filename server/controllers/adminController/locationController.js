const Location = require("../../models/locationModel");

//add location
exports.addLocation = async (req, res) => {
  try {
    const {location} = req.body;
    console.log(location);
    const newLocation = new Location(req.body);
    await newLocation.save();
    res.send({
      success: true,
      message: "added location successfully",
      data: location,
    });
  } catch (error) {}
};
