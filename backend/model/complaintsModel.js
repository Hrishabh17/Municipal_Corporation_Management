const {con} = require('../database')
const generateUniqueId = require('generate-unique-id');

const registerComplaints = async(data) =>{
    const id = generateUniqueId({
        length: 5,
        useLetters: false
      });

    console.log(data)
    
    let date_ob = new Date();
    // current date
    // adjust 0 before single digit date
    let day = ("0" + date_ob.getDate()).slice(-2);
    // current month
    let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
    // current year
    let year = date_ob.getFullYear();
    // current hours
    let hours = date_ob.getHours();
    // current minutes
    let minutes = date_ob.getMinutes();
    // current seconds
    let seconds = date_ob.getSeconds();

    const inDate = `${year}-${month}-${day}`
    const time = `${hours}:${minutes}:${seconds}`


    const value = await new Promise((resolve, reject)=>{
        const query = `Insert into complaint values(${id}, 4463, "${data.description}", "${data.problemImage}", 
                        "Pending", "${data.location}", ${null}, ${null}, "${time}", "${inDate}", ${null}, ${null}, "${data.address}", ${null},
                        ${null})`
                        
        con.query(query, (err, res, fields)=>{
            if(err) reject(err);
            const registrationTime = `${inDate} ${time}`
            resolve({complaintId:id, registrationTime:registrationTime, location:data.location, description:data.description})
        })
    })
    return value;
}

const complaintData = async(req, res, next)=>{
    const query1 = 'select count(complaint_number) as count from complaint where(complaint_status = "Pending")'
    const query2 = 'select count(complaint_number) as count from complaint where(complaint_status = "Resolved")'

    const pending_val = await new Promise((resolve, reject)=>{
        con.query(query1, (err, res, fields) => {
            if (err)
                reject(err);
            else{
                resolve(res)
            }
        })
    })

    const resolved_val = await new Promise((resolve, reject)=>{
        con.query(query2, (err, res, fields) => {
            if (err)
                reject(err);
            else{
                resolve(res)
            }
        })
    })

    return([{total: pending_val[0].count + resolved_val[0].count,
            resolved:resolved_val[0].count,
            pending:pending_val[0].count}])
}

module.exports = {
    registerComplaints, 
    complaintData
}