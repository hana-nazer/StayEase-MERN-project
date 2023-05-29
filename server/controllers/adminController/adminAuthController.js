const Admin = require("../../models/adminModel");
const { createToken } = require("../../middlewares/tokenAuth");
const bcrypt = require("bcryptjs");
const Resort = require("../../models/resortModel");
const Owner = require("../../models/ownerModel");

// login admin
exports.adminLogin = async (req, res) => {
  try {
    // check if admin exists
    const admin = await Admin.findOne({ email: req.body.email });
    if (!admin) {
      return res.send({
        success: false,
        message: "Invalid email",
      });
    }

    // check password valid or not
    const validPassword = await bcrypt.compare(
      req.body.password,
      admin.password
    );
    if (!validPassword) {
      return res.send({
        success: false,
        message: "Incorrect password",
      });
    }

    // token creation
    const token = createToken(
      { userId: admin._id, role: "admin" },
      process.env.SECRET,
      "1d"
    );
    res.send({
      success: true,
      message: "admin loggedin successfully",
      data: token,
    });
  } catch (error) {
    res.send({
      succes: false,
      message: error.message,
    });
  }
};

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
exports.getPendingResortData = async (req, res) => {
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
      console.log("approved");
    }

    if (action === "Reject") {
      resort.status = "rejected";
      console.log("resort");
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
    res.send({ success: true, data: resorts});
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve resorts" });
  }
};
