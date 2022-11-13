const express = require('express')
const router = express.Router()
const complaintController = require('../controllers/complaintsController')

router.route('/')
.get(complaintController.registerComplaint)
.post(complaintController.registerComplaint)
.put(complaintController.registerComplaint)

router.route('/getCount')
.get(complaintController.complaintData)
.post(complaintController.complaintData)
.put(complaintController.complaintData)

router.route('/search/:id')
.get(complaintController.searchData)
.post(complaintController.searchData)
.put(complaintController.searchData)

module.exports = router