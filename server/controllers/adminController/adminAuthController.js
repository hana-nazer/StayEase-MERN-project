const Admin = require("../../models/adminModel");
const { createToken } = require("../../middlewares/tokenAuth");
const bcrypt = require("bcryptjs");
const User = require('../../models/userModel')

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

exports.getCurrentAdmin = async (req, res) => {
  try {
    const admin = await Admin.findById(req.userId).select("-password");
    res.send({
      success: true,
      message: "admin data",
      data: admin,
      
    });
  } catch (error) {
    console.log("error");
  }
};

exports.usersList = async(req,res)=>{
  try {
    const users = await User.find()
    console.log(users);
    res.send({succes:true, data:users})
  } catch (error) {
    res.status(500).json({ message: "Failed to retrieve users" });
    
  }
}



