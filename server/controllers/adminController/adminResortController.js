const Resort = require("../../models/resortModel");
const Owner = require("../../models/ownerModel");

// getPending resorts
exports.getPendingResorts = async (req, res) => {
  try {
    const pendingResorts = await Resort.find({ status: "pending" });
    res.send({ success: true, data: pendingResorts });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve pending resorts" });
  }
};

// specific resort detail for approval
exports.getResortData = async (req, res) => {
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

// review resort
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
    }

    if (action === "Reject") {
      resort.status = "rejected";
    }

    const updatedResort = await resort.save();

    res.send({
      success: true,
      message: "Resort review completed successfully",
      data: updatedResort,
    });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};

//resort list
exports.resortList = async (req, res) => {
  try {
    const resorts = await Resort.find({ status: "approved" });
    res.send({ success: true, data: resorts });
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve resorts" });
  }
};

//resort info of approved resort
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