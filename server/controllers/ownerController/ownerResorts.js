const Owner = require("../../models/ownerModel");
const Resort = require("../../models/resortModel");

exports.getResorts = async (req, res) => {
  try {
    const ownerId = req.userId;
    const resorts = await Resort.find({ owner: ownerId });
    res.send({ success: true, data: resorts });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve  resorts" });
  }
};
