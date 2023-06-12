const Resort = require("../../models/resortModel");
const Owner = require("../../models/ownerModel");
const Category = require("../../models/CategoryModel");

// resorts list
exports.getResorts = async (req, res) => {
  try {
    const { category } = req.query;
    const query = { status: "approved" };
    if (category) {
      query.category = category;
    }
    const resorts = await Resort.find(query);
    res.send({ success: true, data: resorts });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve resorts" });
  }
};

// resort detailed view
exports.resortData = async (req, res) => {
  try {
    const resort = await Resort.findById(req.params.resortId);
    if (!resort) {
      res.send({ message: "Resort not found" });
    }
    const owner = resort.owner;
    const ownerData = await Owner.findById(owner);
    res.send({ success: true, data: resort, owner: ownerData });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve resort details" });
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
