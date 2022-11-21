const express = require('express')
const router = express.Router()
const empController = require('../controllers/employeeController')

router.route('/register')
.get(empController.registerEmployee)
.post(empController.registerEmployee)
.put(empController.registerEmployee)

module.exports = router