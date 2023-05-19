const Owner = require("../../models/ownerModel");
const Resort = require("../../models/resortModel");

exports.registerResort = async (req, res) => {
  try {
    const newResort = new Resort({
      name: req.body.name,
      location: req.body.place,
      description: req.body.description,
      owner: req.body.userId,
      status: "pending",
      // add image url
    });
    console.log("register resort");

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
