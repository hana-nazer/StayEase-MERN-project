const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleware");
const adminAuthController = require("../controllers/adminController/adminAuthController");
const adminResortController = require("../controllers/adminController/adminResortController");
const locationController = require("../controllers/adminController/locationController");

router.post("/login", adminAuthController.adminLogin);
router.get("/pending", authMiddleware, adminResortController.getPendingResorts);
router.get(
  "/view_resort/:resortId",
  authMiddleware,
  adminResortController.getResortData
);
router.post(
  "/update_status",
  authMiddleware,
  adminResortController.reviewResort
);
router.get("/resorts", authMiddleware, adminResortController.resortList);
router.post("/add_location", authMiddleware, locationController.addLocation);
router.get(
  "/resortInfo/:resortId",
  authMiddleware,
  adminResortController.resortData
);
router.get("/users", authMiddleware, adminAuthController.usersList);

router.get('/get-current-admin',authMiddleware,adminAuthController.getCurrentAdmin)


module.exports = router;
