const registerComplaint = (req, res)=>{
    console.log(req.body)
    res.send('registered complaints')
}

module.exports = {
    registerComplaint
}