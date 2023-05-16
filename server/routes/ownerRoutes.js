const express = require("express");
const router = express.Router();
const ownerAuthController = require("../controllers/ownerController/ownerAuthContoller");
const resortController = require("../controllers/ownerController/resortController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/signup", ownerAuthController.ownerSignUp);
router.post("/login", ownerAuthController.ownerLogin);
router.post(
  "/resort_register",
  authMiddleware,
  resortController.registerResort
);

module.exports = router;
