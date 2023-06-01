const express = require('express')
const router = express.Router()
const adminAuthController = require('../controllers/adminController/adminAuthController');
const authMiddleware = require('../middlewares/authMiddleware');
const locationController = require('../controllers/adminController/locationController')


router.post('/login',adminAuthController.adminLogin)
router.get('/pending',authMiddleware,adminAuthController.getPendingResorts)
router.get('/view_resort/:resortId',authMiddleware,adminAuthController.getResortData)
router.post('/update_status',authMiddleware, adminAuthController.reviewResort);
router.get('/resorts',authMiddleware,adminAuthController.resortList)
router.post('/add_location',authMiddleware,locationController.addLocation)
router.get('/resortInfo/:resortId',authMiddleware,adminAuthController.resortData)

module.exports= router