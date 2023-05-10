
// using this code when doing something and checking expected user is there or not

const jwt = require("jsonwebtoken");
module.exports = function (req, res, next) {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jwt.verify(token, process.env.SECRET);
    req.body.userId = decoded.userId;
    req.body.role = decoded.role;
    next();
  } catch (error) {
    res.status(401).send({ success: false, message: "invalid token" });
  }
};
