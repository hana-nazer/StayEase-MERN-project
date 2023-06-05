const express = require('express')
const router = express.Router()
const userAuthController = require('../controllers/userController/userAuthController')
const userResortController = require('../controllers/userController/userResortController')
const authMiddleware = require('../middlewares/authMiddleware')
const bookingController = require('../controllers/userController/BookingController')

router.post('/signup',userAuthController.postSignUp);
router.post('/login',userAuthController.postLogin)
router.get('/resorts',userResortController.getResorts)
router.get('/resortInfo/:resortId',userResortController.resortData)
router.post('/book/:resortId',bookingController.postBooking)


module.exports = router 