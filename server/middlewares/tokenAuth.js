const jwt = require("jsonwebtoken");

/**
 * Creates a JWT token with the provided payload, secret, and expiration time.
 * @param {object} payload - The payload to include in the token.
 * @param {string} secret - The secret key used to sign the token.
 * @param {string | number} expiresIn - The expiration time for the token.
 * @returns {string} - The generated JWT token.
 */
function createToken(payload, secret, expiresIn) {
  return jwt.sign(payload, secret, { expiresIn });
}
module.exports = { createToken };
