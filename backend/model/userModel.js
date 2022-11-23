const {con} = require('../database')
const generateUniqueId = require('generate-unique-id');

const registerUser = async(data) =>{
    const id = generateUniqueId({
        length: 5,
        useLetters: false
      });

      const query = `Insert into users values(${id}, "${data.name}", "${data.contactNum}", 
       "${data.password}", "${data.address}", "${data.profileImage}")`
      
        con.query(query, (err, res, fields)=>{
        if(err) throw err;
        })
        return {register:true};
}


const auth = async(data) =>{
    const query =  `Select user_name, user_number, profile_image from users where(user_name = "${data.username}" and passcode = "${data.password}")`
    const query2 = `Select ssn, employee_name, profile_image, designation from employee where(employee_name = "${data.username}" and passcode = "${data.password}")`

    const value = await new Promise((resolve, reject)=>{
        con.query(query, (err, res, fields) => {
            if (err)
                reject(err);
            if(!res[0]){
                resolve({exists:0})
            }
            else{
                console.log(res[0].user_name)
                resolve({exists:1, type:'user', user:data.username, user_id:res[0].user_number, profile_image:res[0].profile_image})
            }
        })
       
    })

    if(value.exists===0){
        const value2 = await new Promise((resolve, reject)=>{
            con.query(query2, (err, res, fields) => {
                if (err)
                    reject(err);
                console.log(res)
                if(!res[0]){
                    resolve({exists:0})
                }
                else{
                    console.log(res[0])
                    resolve({exists:1, type:res[0].designation, user:data.username, user_id:res[0].ssn, profile_image:res[0].profile_image})
                }
            })
        })
        return value2
    }
    return value
}

module.exports = {
    registerUser, 
    auth
}