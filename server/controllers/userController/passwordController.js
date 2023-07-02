const User = require("../../models/userModel");
const nodemailer = require("nodemailer");
const { createToken } = require("../../middlewares/tokenAuth");

exports.forgotPassword = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email: email });
  if (!user) {
    return res.send({ message: "User not found" });
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
        console.log("error" + error);
      } else {
        console.log("email sent" + info.response);
        res.status(201).json({ status: 201, info });
      }
    });
  } catch (error) {}
  res.send({ message: "link is sent to the mail", resetLink: link });
};
