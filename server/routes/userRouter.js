const express = require("express");
const router = express.Router();
const userAuthController = require("../controllers/userController/userAuthController");
const userResortController = require("../controllers/userController/userResortController");
const authMiddleware = require("../middlewares/authMiddleware");
const bookingController = require("../controllers/userController/BookingController");

router.post("/signup", userAuthController.postSignUp);
router.post("/login", userAuthController.postLogin);
router.get("/resorts", userResortController.getResorts);
router.get("/resortInfo/:resortId", userResortController.resortData);
router.get(
  "/get-current-user",
  authMiddleware,
  userAuthController.getCurrentUser
);
router.post("/book/:resortId", authMiddleware, bookingController.postBooking);
router.get(
  "/resorts/:resortId/disableddates",
  authMiddleware,
  bookingController.fetchDisabledDates
);
router.get('/fetch-category',userResortController.category)

module.exports = router;
