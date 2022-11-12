const complaintsModel = require('../model/complaintsModel')

const registerComplaint = (req, res)=>{
    // console.log(req.body)
    complaintsModel.registerComplaints(req.body)
    res.send('registered complaints')
}

module.exports = {
    registerComplaint
}