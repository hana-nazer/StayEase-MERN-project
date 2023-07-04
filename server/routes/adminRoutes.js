const express = require("express");
const router = express.Router();
const adminAuth = require("../middlewares/adminAuth");
const adminAuthController = require("../controllers/adminController/adminAuthController");
const adminResortController = require("../controllers/adminController/adminResortController");
const locationController = require("../controllers/adminController/locationController");
const categoryController = require("../controllers/adminController/CategoryController");
const dashboardController = require('../controllers/adminController/dashboardController')

router.post("/login", adminAuthController.adminLogin);
router.get("/pending", adminAuth, adminResortController.getPendingResorts);
router.get(
  "/view_resort/:resortId",
  adminAuth,
  adminResortController.getResortData
);
router.post("/update_status", adminAuth, adminResortController.reviewResort);
router.get("/resorts", adminAuth, adminResortController.resortList);
router.post("/add_location", adminAuth, locationController.addLocation);
router.post("/add_category", adminAuth, categoryController.addCategory);
router.get(
  "/resortInfo/:resortId",
  adminAuth,
  adminResortController.resortData
);
router.get("/users", adminAuth, adminAuthController.usersList);

router.get(
  "/get-current-admin",
  adminAuth,
  adminAuthController.getCurrentAdmin
);
router.get("/fetch-location", adminAuth, locationController.location);
router.get("/fetch-category", adminAuth, categoryController.category);
router.get("/bookings", adminAuth, adminResortController.bookings);
router.get('/dashboard',adminAuth,dashboardController.dashboardData )

module.exports = router;
