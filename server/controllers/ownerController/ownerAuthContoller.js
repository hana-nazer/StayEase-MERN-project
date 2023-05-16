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
      message: error.message,
    });
  }
};

// owner Login
exports.ownerLogin = async (req, res) => {
  try {
    // check user exist or not
    const owner = await Owner.findOne({ email: req.body.email });
    if (!owner) {
      return res.send({
        success: false,
        message: "This owner does not exists",
      });
    }

    // validate password
    const validatePassword = bcrypt.compare(req.body.password, owner.password);
    if (!validatePassword) {
      return res.send({
        success: false,
        message: "Invalid credentials",
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
      message: "loggedin successfully",
      data: token,
    });
  } catch (error) {
    res.send({
      succes: false,
      message: error.message,
    });
  }
};


