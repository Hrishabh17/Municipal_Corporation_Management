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

const getEmpByDept = async(data) =>{
    const query = `select ssn, employee_name from employee where(department_id = ${data} and designation='employee')`
    
      const value = await new Promise((resolve, reject)=>{
        con.query(query, (err, res, fields)=>{
        if(err) reject(err);
        else{
          resolve(res)
        }
        })
      })
      return value;
}

const getAllEmp = async() =>{
  const query = `select ssn, employee_name, contact_num, designation from employee`
  
    const value = await new Promise((resolve, reject)=>{
      con.query(query, (err, res, fields)=>{
      if(err) reject(err);
      else{
        resolve(res)
      }
      })
    })
    return value;
}

module.exports = {
    registerEmployee,
    getEmpByDept,
    getAllEmp
}