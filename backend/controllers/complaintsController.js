const complaintsModel = require('../model/complaintsModel')

const registerComplaint = (req, res)=>{
    const data =  complaintsModel.registerComplaints(req.body)
    data.then((response)=>res.json(response))
}

const complaintData = (req, res)=>{
    const data =  complaintsModel.complaintData(req.body)
    data.then((response)=>res.json(response))
}

module.exports = {
    registerComplaint,
    complaintData
}