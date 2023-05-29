const express = require('express')
const router = express.Router()
const adminAuthController = require('../controllers/adminController/adminAuthController');
const authMiddleware = require('../middlewares/authMiddleware');


router.post('/login',adminAuthController.adminLogin)
router.get('/pending',authMiddleware,adminAuthController.getPendingResorts)
router.get('/view_resort/:resortId',authMiddleware,adminAuthController.getPendingResortData)
router.post('/update_status',authMiddleware, adminAuthController.reviewResort);
router.get('/resorts',authMiddleware,adminAuthController.resortList)


module.exports= router