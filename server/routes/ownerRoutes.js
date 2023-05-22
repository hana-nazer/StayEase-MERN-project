const express = require("express");
const router = express.Router();
const ownerAuthController = require("../controllers/ownerController/ownerAuthContoller");
const resortController = require("../controllers/resortController/resortController");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/signup", ownerAuthController.ownerSignUp);
router.post("/login", ownerAuthController.ownerLogin);
router.post(
  "/register",
  authMiddleware,
  resortController.registerResort
);

module.exports = router;
