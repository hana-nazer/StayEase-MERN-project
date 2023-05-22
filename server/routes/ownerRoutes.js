const express = require("express");
const router = express.Router();
const ownerAuthController = require("../controllers/ownerController/ownerAuthContoller");
const resortController = require("../controllers/resortController/resortController");
const ownerResorts  = require('../controllers/ownerController/ownerResorts')
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/signup", ownerAuthController.ownerSignUp);
router.post("/login", ownerAuthController.ownerLogin);
router.post(
  "/register",
  authMiddleware,
  resortController.registerResort
);
router.get('/resorts',authMiddleware,ownerResorts.getResorts)

module.exports = router;
