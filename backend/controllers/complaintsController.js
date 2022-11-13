const complaintsModel = require('../model/complaintsModel')

const registerComplaint = (req, res)=>{
    const data =  complaintsModel.registerComplaints(req.body)
    data.then((response)=>res.json(response))
}

const complaintData = (req, res)=>{
    const data =  complaintsModel.complaintData()
    data.then((response)=>res.json(response))
}

const searchData = (req, res)=>{
    console.log('reqbody : ', req.params.id)
    const data =  complaintsModel.searchData(req.params.id)
    data.then((response)=>res.json(response))
}

module.exports = {
    registerComplaint,
    complaintData,
    searchData
}