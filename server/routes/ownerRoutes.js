const express = require('express')
const router = express.Router()
const ownerAuthController = require('../controllers/ownerController/ownerAuthContoller')

router.post('/signup',ownerAuthController.ownerSignUp)
router.post('/login',ownerAuthController.ownerLogin)

module.exports = router