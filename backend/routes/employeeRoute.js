const express = require('express')
const router = express.Router()
const empController = require('../controllers/employeeController')

router.route('/register')
.get(empController.registerEmployee)
.post(empController.registerEmployee)
.put(empController.registerEmployee)

router.route('/getempbydept/:deptId')
.get(empController.getEmpByDept)
.post(empController.getEmpByDept)
.put(empController.getEmpByDept)

router.route('/getAllEmp')
.get(empController.getAllEmp)
.post(empController.getAllEmp)
.put(empController.getAllEmp)

module.exports = router