const {con} = require('../database')
const generateUniqueId = require('generate-unique-id');

const registerComplaints = async(data) =>{
    const id = generateUniqueId({
        length: 5,
        useLetters: false
      });
    
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
        const query = `Insert into complaint values(${id}, ${data.user}, "${data.description}", "${data.problemImage}", 
                        "Pending", "${data.location}", ${null}, ${null}, "${time}", "${inDate}", ${null}, ${null}, "${data.department}",
                        ${null})`
                        
        con.query(query, (err, res, fields)=>{
            if(err) reject(err);
            const registrationTime = `${inDate} ${time}`
            resolve({complaintId:id, registrationTime:registrationTime, location:data.location, description:data.description})
        })
    })
    return value;
}

const complaintData = async()=>{
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

const searchData = async(data)=>{
    const query1 = `select * from complaint where(complaint_number like "${data}%")`

    const value = await new Promise((resolve, reject)=>{
        con.query(query1, (err, res, fields) => {
            if (err)
                reject(err);
            else{
                resolve(res)
            }
        })
    })
    return {value: value}
}

const fetchAllData=async()=>{
    const query = `select complaint_number, complaint_status, complaint_description, priority, complaint_type, registration_date, completion_time from complaint`
    const value = await new Promise((resolve, reject)=>{
        con.query(query, (err, res, fields) => {
            if (err)
                reject(err);
            else{
                resolve(res)
            }
        })
    })

    console.log(value)
    return value

}

const updatecomplaint=async(data)=>{
    const query = `update complaint set complaint_status="${data.status}" where complaint_number = ${data.id}`
    const value = await new Promise((resolve, reject)=>{
        con.query(query, (err, res, fields) => {
            if (err)
                reject(err);
            else{
                resolve({updated:true})
            }
        })
    })

    console.log(value)
    return value

}

module.exports = {
    registerComplaints, 
    complaintData,
    searchData,
    fetchAllData,
    updatecomplaint
}