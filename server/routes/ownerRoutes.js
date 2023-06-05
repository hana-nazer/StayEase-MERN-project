const express = require("express");
const router = express.Router();
const ownerAuthController = require("../controllers/ownerController/ownerAuthContoller");
const ownerResorts = require("../controllers/ownerController/ownerResorts");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/signup", ownerAuthController.ownerSignUp);
router.post("/login", ownerAuthController.ownerLogin);
router.get('/get-current-owner',authMiddleware,ownerAuthController.getCurrentOwner)
router.post("/register", authMiddleware, ownerResorts.registerResort);
router.get("/resorts", authMiddleware, ownerResorts.getResorts);
router.get('/resortInfo/:resortId',authMiddleware,ownerResorts.resortData)
router.get('/fetch-location',authMiddleware,ownerResorts.location)


module.exports = router;
