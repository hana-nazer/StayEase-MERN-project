const express = require('express')
const router = express.Router()
const userAuthController = require('../controllers/userController/userAuthController')

router.post('/signup',userAuthController.postSignUp);
router.post('/login',userAuthController.postLogin)


module.exports = router 