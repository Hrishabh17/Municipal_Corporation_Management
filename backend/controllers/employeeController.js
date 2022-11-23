const empModel = require('../model/employeeModel')

const registerEmployee = (req, res)=>{
    const data =  empModel.registerEmployee(req.body)
    data.then((response)=>res.json(response))
}

const getEmpByDept = (req, res)=>{
    const data =  empModel.getEmpByDept(req.params.deptId)
    data.then((response)=>res.json(response))
}

const getAllEmp = (req, res)=>{
    const data =  empModel.getAllEmp()
    data.then((response)=>res.json(response))
}



module.exports = {
    registerEmployee,
    getEmpByDept,
    getAllEmp
}