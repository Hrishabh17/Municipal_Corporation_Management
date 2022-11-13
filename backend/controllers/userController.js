const userModel = require('../model/userModel')

const registerUser = (req, res)=>{
    const data =  userModel.registerUser(req.body)
    data.then((response)=>res.json(response))
}

const auth = (req, res)=>{
    const data =  userModel.auth(req.body)
    data.then((response)=>res.json(response))
}


module.exports = {
    registerUser,
    auth
}