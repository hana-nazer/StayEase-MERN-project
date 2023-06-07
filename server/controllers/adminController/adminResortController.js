const Resort = require("../../models/resortModel");
const Owner = require("../../models/ownerModel");
const Location = require("../../models/locationModel");

// getPending resorts in for approval
exports.getPendingResorts = async (req, res) => {
  try {
    const pendingResorts = await Resort.find({ status: "pending" });
    res.send({ success: true, data: pendingResorts });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve pending resorts" });
  }
};

//  Get specific resort details for approval
exports.getResortData = async (req, res) => {
  try {
    const resort = await Resort.findById(req.params.resortId);
    if (!resort) {
      return res.status(404).json({ message: "Resort not found" });
    }
    const ownerData = await Owner.findById(resort.owner);
    res.send({ success: true, data: resort, owner: ownerData });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve resort details" });
  }
};

// Review resort for approval/rejection
exports.reviewResort = async (req, res) => {
  try {
    const { resortId, action } = req.body;
    const resort = await Resort.findById(resortId);
    if (!resort) {
      return res.send({
        success: false,
        message: "Resort not found",
      });
    }
    // Update the resort's status based on the provided value
    if (action === "Approve") {
      resort.status = "approved";
      const updatedResort = await resort.save();
      res.send({
        success: true,
        message: "Resort review completed successfully",
        data: updatedResort,
      });
    }
    if (action === "Reject") {
      resort.status = "rejected";
      const updatedResort = await resort.save();
      res.send({
        success: false,
        message: "Rejected the resort",
        data: updatedResort,
      });
    }
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

// Get list of approved resorts
exports.resortList = async (req, res) => {
  try {
    const resorts = await Resort.find({ status: "approved" });
    res.send({ success: true, data: resorts });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve resorts" });
  }
};

// Get resort details of an approved resort
exports.resortData = async (req, res) => {
  try {
    const resort = await Resort.findById(req.params.resortId);
    if (!resort) {
      return res.status(404).json({ message: "Resort not found" });
    }
    const owner = resort.owner;
    const ownerData = await Owner.findById(owner);
    res.send({ success: true, data: resort, owner: ownerData });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve resort details" });
  }
};

// Fetch all locations
exports.location = async (req, res) => {
  try {
    const location = await Location.find();
    res.send({ success: true, data: location });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve location" });
  }
};
