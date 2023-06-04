// using this code when doing something and checking expected user is there or not

const jwt = require("jsonwebtoken");
module.exports = function (req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET);
    req.userId = decoded.userId;
    req.role = decoded.role;
    if (req.role === "admin") {
      return next();
    }
    if (req.role === "owner") {
      return next();
    }

    if (req.role === "user") {
      return next();
    }
    return res
      .status(403)
      .send({ success: false, message: "Access denied. Invalid role." });
  } catch (error) {
    res.status(401).send({ success: false, message: "invalid token" });
  }
};
