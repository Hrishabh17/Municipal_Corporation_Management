const {con} = require('../database')
const generateUniqueId = require('generate-unique-id');

const registerUser = async(data) =>{
    const id = generateUniqueId({
        length: 5,
        useLetters: false
      });

      const query = `Insert into users values(${id}, "${data.name}", "${data.contactNum}", 
       "${data.password}", "${data.address}")`
      
        con.query(query, (err, res, fields)=>{
        if(err) throw err;
        })
        return {register:true};
}


const auth = async(data) =>{
    const query =  `Select user_name from users where(user_name = "${data.username}" and passcode = "${data.password}")`
    const value = await new Promise((resolve, reject)=>{
        con.query(query, (err, res, fields) => {
            if (err)
                reject(err);
            if(!res[0]){
                resolve({exists:0})
            }
            else{
                resolve({exists:1})
            }
        })
    })

    return value;

}

module.exports = {
    registerUser, 
    auth
}