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

const fetchAllData = (req, res)=>{
    const data =  complaintsModel.fetchAllData()
    data.then((response)=>res.json(response))
}

const updatecomplaint = (req, res)=>{
    const data =  complaintsModel.updatecomplaint(req.body)
    data.then((response)=>res.json(response))
}

const addComment = (req, res)=>{
    const data =  complaintsModel.addComment(req.body)
    data.then((response)=>res.json(response))
}

module.exports = {
    registerComplaint,
    complaintData,
    searchData,
    fetchAllData,
    updatecomplaint,
    addComment
}