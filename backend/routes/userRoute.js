const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')

router.route('/')
.get(userController.registerUser)
.post(userController.registerUser)
.put(userController.registerUser)

router.route('/auth')
.get( userController.auth)
.post(userController.auth)
.put(userController.auth)

module.exports = router