const Resort = require("../../models/resortModel");

exports.registerResort = async (req, res) => {
  try {
    const newResort = new Resort({
      name: req.body.name,
      location: req.body.place,
      description: req.body.description,
      address:req.body.address,
      owner: req.body.userId,
      status: "pending",
      charge_per_night:req.body.charge,
      no_of_guest:req.body.guest,
      amenities:req.body.amenities,
      owner: req.userId,
      images:req.body.imgUrls
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
