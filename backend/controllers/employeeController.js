const empModel = require('../model/employeeModel')

const registerEmployee = (req, res)=>{
    const data =  empModel.registerEmployee(req.body)
    data.then((response)=>res.json(response))
}


module.exports = {
    registerEmployee
}