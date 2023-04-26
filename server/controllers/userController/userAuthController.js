const User = require("../../models/userModel");
const bcrypt = require("bcryptjs");

// register a new user
exports.postSignUp = async (req, res) => {
  try {
    // check if the user already exists
    const userExists = await User.findOne({ email: req.body.email });
    if (userExists) {
      return res.send({
        success: false,
        message: "User already exists",
      });
    }

    // hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);
    req.body.password = hashedPassword;

    // save the user
    const newUser = new User(req.body);
    await newUser.save();
    res.send({ success: true, message: "Created user successfully" });
  } catch (error) {
    res.send({
      success: false,
      message: error.message,
    });
  }
};
