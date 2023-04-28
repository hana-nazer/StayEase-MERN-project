const User = require("../../models/userModel");
const jwt = require('jsonwebtoken');
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

// login user
exports.postLogin = async (req, res) => {
  try {
    
    // check if user exists
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.send({
        success: false,
        message: "User does not exist",
      });
    }

    // check password valid or not
    const validPassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!validPassword) {
      return res.send({
        success: false,
        message: "Incorrect password",
      });
    }

    // token creation
    const token = jwt.sign({ userId: user._id }, process.env.SECRET, {
      expiresIn: "1d",
    });
    res.send({
      success: true,
      message: "user loggedin successfully",
      data: token,
    });
  } catch (error) {
    res.send({
      succes: false,
      message: error.message,
    });
  }
};
