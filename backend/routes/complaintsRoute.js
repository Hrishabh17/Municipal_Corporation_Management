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

router.route('/getallcomplaints')
.get(complaintController.fetchAllData)
.post(complaintController.fetchAllData)
.put(complaintController.fetchAllData)


router.route('/updatecomplaint')
.get(complaintController.updatecomplaint)
.post(complaintController.updatecomplaint)
.put(complaintController.updatecomplaint)

router.route('/addcomment')
.get(complaintController.addComment)
.post(complaintController.addComment)
.put(complaintController.addComment)

router.route('/getcomplainttimeline')
.get(complaintController.getcomplainttimeline)
.post(complaintController.getcomplainttimeline)
.put(complaintController.getcomplainttimeline)

router.route('/fetchusercomplaints')
.get(complaintController.fetchUserComplaints)
.post(complaintController.fetchUserComplaints)
.put(complaintController.fetchUserComplaints)

router.route('/updateempdate')
.get(complaintController.updateEmpDate)
.post(complaintController.updateEmpDate)
.put(complaintController.updateEmpDate)

router.route('/getassignedcomplaints/:empId')
.get(complaintController.fetchEmpData)
.post(complaintController.fetchEmpData)
.put(complaintController.fetchEmpData)

router.route('/getwardcomplaints/:corporatorId')
.get(complaintController.fetchWardWiseData)
.post(complaintController.fetchWardWiseData)
.put(complaintController.fetchWardWiseData)

router.route('/warning/:empId')
.get(complaintController.fetchWarnings)
.post(complaintController.fetchWarnings)
.put(complaintController.fetchWarnings)

module.exports = router