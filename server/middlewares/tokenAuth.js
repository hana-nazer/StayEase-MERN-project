const jwt = require("jsonwebtoken");

function createToken(payload, secret, expiresIn) {
  return jwt.sign(payload, secret, { expiresIn });
}
module.exports = { createToken };
