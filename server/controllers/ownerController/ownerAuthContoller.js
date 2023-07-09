const Owner = require("../../models/ownerModel");
const { createToken } = require("../../middlewares/tokenAuth");
const bcrypt = require("bcryptjs");

// Register owner
exports.ownerSignUp = async (req, res) => {
  try {
    // check owner already exists
    const ownerExist = await Owner.findOne({ email: req.body.email });
    if (ownerExist) {
      return res.send({
        success: false,
        message: "Owner with this email already exists",
      });
    }

    // hashPassword
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    //Save the owner
    const newOwner = new Owner(req.body);
    await newOwner.save();
    res.send({ success: true, message: "Created owner account successfully" });
  } catch (error) {
    res.send({
      success: false,
      message: "Unexpected error occured",
      error: error.message,
    });
  }
};

// login
exports.ownerLogin = async (req, res) => {
  try {
    // check if owner exists
    const owner = await Owner.findOne({ email: req.body.email });
    if (!owner) {
      return res.send({
        success: false,
        message: "Invalid email",
      });
    }

    // check password valid or not
    const validPassword = await bcrypt.compare(
      req.body.password,
      owner.password
    );
    if (!validPassword) {
      return res.send({
        success: false,
        message: "Incorrect password",
      });
    }

    // token creation
    const token = createToken(
      { userId: owner._id, role: "owner" },
      process.env.SECRET,
      "1d"
    );
    res.send({
      success: true,
      message: " loggedin successfully",
      data: token,
    });
  } catch (error) {
    res.send({
      succes: false,
      message: "an error occured",
      error: error.message,
    });
  }
};

// get-current-owner
exports.getCurrentOwner = async (req, res) => {
  try {
    const owner = await Owner.findById(req.userId).select("-password");
    res.send({
      success: true,
      message: "owner data",
      data: owner,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to retrieve owner details" });
  }
};
