const User = require("../../models/userModel");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { createToken } = require("../../middlewares/tokenAuth");

// sending forgot password link
exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.send({ message: "User not found", success: false });
  }

  const secret = process.env.SECRET + user.password;
  const payload = {
    email: user.email,
    id: user.id,
    role: "user",
  };
  const token = createToken(payload, secret, "10m");
  const link = `http://localhost:3000/reset-password/${user.id}/${token}`;
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL,
      to: email,
      subject: `Reset password link`,
      html: `<p>Click on the following link to reset your password:</p><p><a href="${link}">${link}</a></p>`,
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        res.status(500).json({
          success: false,
          message: "Error sending email",
          error: error.message,
        });
      } else {
        res.status(201).json({
          success: true,
          message: "Email sent successfully",
          response: info.response,
        });
      }
    });
  } catch (error) {}
  res.send({
    message: "link is sent to the mail",
    resetLink: link,
    success: true,
  });
};

// reset password
exports.resetPassword = async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;
  const user = await User.findById(id);
  if (!user) {
    res.send({ success: false, message: "no user found" });
  }
  const secret = process.env.SECRET + user.password;
  try {
    const payload = jwt.verify(token, secret);
    const userEmail = payload.email;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const newUser = await User.updateOne(
      { email: userEmail },
      { $set: { password: hashedPassword } }
    );
    if (newUser.modifiedCount === 1) {
      res.send({ success: true, message: "Password updated successfully" });
    } else {
      res.send({ success: false, message: "password not updated" });
    }
  } catch (error) {
    res.send({ success: false, message: "Error resetting password" });
  }
};
