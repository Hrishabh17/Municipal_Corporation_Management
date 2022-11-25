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

const getcomplainttimeline = (req, res)=>{
    const data =  complaintsModel.getcomplainttimeline(req.body)
    data.then((response)=>res.json(response))
}

const fetchUserComplaints = (req, res)=>{
    const data =  complaintsModel.fetchUserComplaints(req.body)
    data.then((response)=>res.json(response))
}

const updateEmpDate = (req, res)=>{
    const data =  complaintsModel.updateEmpDate(req.body)
    data.then((response)=>res.json(response))
}

const fetchEmpData = (req, res)=>{
    // console.log('reqbody : ', req.params.id)
    const data =  complaintsModel.fetchEmpData(req.params.empId)
    data.then((response)=>res.json(response))
}

const fetchWardWiseData = (req, res)=>{
    const data =  complaintsModel.fetchWardWiseData(req.params.corporatorId)
    data.then((response)=>res.json(response))
}

const fetchWarnings = (req, res)=>{
    const data =  complaintsModel.fetchWarnings(req.params.empId)
    data.then((response)=>res.json(response))
}

module.exports = {
    registerComplaint,
    complaintData,
    searchData,
    fetchAllData,
    updatecomplaint,
    addComment,
    getcomplainttimeline,
    fetchUserComplaints, 
    updateEmpDate, 
    fetchEmpData,
    fetchWardWiseData,
    fetchWarnings
}