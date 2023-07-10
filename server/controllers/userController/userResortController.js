const Resort = require("../../models/resortModel");
const Owner = require("../../models/ownerModel");
const Category = require("../../models/CategoryModel");
const Location = require("../../models/locationModel");

// resorts list
exports.getResorts = async (req, res) => {
  try {
    const { location, category } = req.query;
    let query = { status: "approved" };

    if (location) {
      const searchLocation = new RegExp(location, "i");
      query.location = searchLocation;
    }

    if (category) {
      const searchCategory = new RegExp(category, "i");
      query.category = searchCategory;
    }

    const resorts = await Resort.find(query);
    res.send({ success: true, data: resorts });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to retrieve resorts" });
  }
};

// resort detailed view
exports.resortData = async (req, res) => {
  try {
    const resort = await Resort.findById(req.params.resortId);
    if (!resort) {
      res.send({ success: false, message: "Resort not found" });
    }
   
    const owner = resort.owner;
    const ownerData = await Owner.findById(owner);
    res.send({ success: true, data: resort, owner: ownerData });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to retrieve resort details" });
  }
};

// Fetch all category
exports.category = async (req, res) => {
  try {
    const category = await Category.find();
    res.send({ success: true, data: category });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to retrieve category" });
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
