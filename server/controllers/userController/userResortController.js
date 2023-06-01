const Resort = require("../../models/resortModel");

exports.getResorts = async (req, res) => {
  try {
    const resorts = await Resort.find({ status: "approved" });
    res.send({ success: true, data: resorts });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve resorts" });
  }
};
