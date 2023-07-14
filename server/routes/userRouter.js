const express = require("express");
const router = express.Router();
const userAuthController = require("../controllers/userController/userAuthController");
const userResortController = require("../controllers/userController/userResortController");
const authMiddleware = require("../middlewares/authMiddleware");
const bookingController = require("../controllers/userController/BookingController");
const passwordController = require("../controllers/userController/passwordController");
const userChats = require("../controllers/chatController/chatController");

router.post("/signup", userAuthController.postSignUp);
router.post("/login", userAuthController.postLogin);
router.get("/resorts", userResortController.getResorts);
router.get("/resortInfo/:resortId", userResortController.resortData);
router.get("/fetch-location", userResortController.location);
router.get(
  "/get-current-user",
  authMiddleware,
  userAuthController.getCurrentUser
);
router.get(
  "/resorts/:resortId/disableddates",
  authMiddleware,
  bookingController.fetchDisabledDates
);
router.get("/fetch-category", userResortController.category);
router.post(
  "/create-checkout-session",
  authMiddleware,
  bookingController.makePayment
);

router.get("/bookings", authMiddleware, bookingController.bookings);

router.post("/forgotPassword", passwordController.forgotPassword);
router.post("/resetPassword/:id/:token", passwordController.resetPassword);
router.post("/getMessage", authMiddleware, userChats.getMessages);
router.post("/addMessage", authMiddleware, userChats.addMessage);
module.exports = router;
