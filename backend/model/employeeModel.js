const {con} = require('../database')
const generateUniqueId = require('generate-unique-id');

const registerEmployee = async(data) =>{
    const id = generateUniqueId({
        length: 5,
        useLetters: false
      });

      const query = `Insert into employee values(${id},${null}, "${data.name}", "${data.designation}", "${data.department}", "${data.contactNum}", 
      "${data.address}", "${data.password}", "${data.profileImage}")`
      
        con.query(query, (err, res, fields)=>{
        if(err) throw err;
        })
        return {register:true};
}

module.exports = {
    registerEmployee
}