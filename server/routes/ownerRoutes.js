const express = require("express");
const router = express.Router();
const ownerAuthController = require("../controllers/ownerController/ownerAuthContoller");
const ownerResorts = require("../controllers/ownerController/ownerResorts");
const ownerAuth = require("../middlewares/ownerAuth");
const ownerDashboard = require('../controllers/ownerController/ownerDashboard')

router.post("/signup", ownerAuthController.ownerSignUp);
router.post("/login", ownerAuthController.ownerLogin);
router.get(
  "/get-current-owner",
  ownerAuth,
  ownerAuthController.getCurrentOwner
);
router.post("/register", ownerAuth, ownerResorts.registerResort);
router.get("/resorts", ownerAuth, ownerResorts.getResorts);
router.get("/resortInfo/:resortId", ownerAuth, ownerResorts.resortData);
router.get("/fetch-location", ownerAuth, ownerResorts.location);
router.get("/fetch-category", ownerAuth, ownerResorts.category);
router.get("/bookings", ownerAuth, ownerResorts.bookings);
router.get('/dashboard',ownerAuth,ownerDashboard.ownerDashboard)

module.exports = router;
