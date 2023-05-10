const Admin = require("../../models/adminModel");
const { createToken } = require("../../middlewares/tokenAuth");
const bcrypt = require("bcryptjs");


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
  }

  