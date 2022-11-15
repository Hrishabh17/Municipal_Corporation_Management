const {con} = require('../database')
const generateUniqueId = require('generate-unique-id');

const registerComplaints = async(data) =>{
    const id = generateUniqueId({
        length: 5,
        useLetters: false
      });


    var newDate = new Date()
    var year = newDate.getFullYear()
    var month = newDate.getMonth()
    var date = newDate.getDate()
    var hours = newDate.getHours()
    var minutes = newDate.getMinutes()
    var seconds = newDate.getSeconds()

    var comment_time = ""
    var comment_date = ""

    comment_date += year + "-" + (month<10?"0":"")+ month + (date<10?"0":"") + "-"+date + ""
    comment_time += (hours<10 ? "0":"") + hours + ":"
    comment_time += (minutes<10 ? "0":"") + minutes + ":"
    comment_time += (seconds<10 ? "0":"")+seconds
    const query2 = `Insert into comments values("Complaint created", "${comment_date} ${comment_time}", ${id}, ${null})`

    const value = await new Promise((resolve, reject)=>{
        const query = `Insert into complaint values(${id}, ${data.user}, "${data.description}", "${data.problemImage}", 
                        "Pending", "${data.location}", ${null}, ${null}, "${comment_time}", "${comment_date}", ${null}, ${null}, "${data.department}",
                        ${null})`

                        
        con.query(query, (err, res, fields)=>{
            if(err) reject(err);
            resolve({complaintId:id, registrationTime:`${comment_date} ${comment_time}`, location:data.location, description:data.description})
        })
    })

    const value2 = await new Promise((resolve, reject)=>{
        con.query(query2, (err, res, fields)=>{
            if(err) reject(err);
            resolve({commentCreated:true})
        })
    })
    return {value, value2};
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
    const query2 = `Insert into comments values("Complaint moved to the ${data.status} section", "${data.commentTime}", ${data.id}, ${data.empId})`

    const value = await new Promise((resolve, reject)=>{
        con.query(query, (err, res, fields) => {
            if (err)
                reject(err);
            else{
                resolve({updated:true})
            }
        })
    })
    const value2 = await new Promise((resolve, reject)=>{
        con.query(query2, (err, res, fields) => {
            if (err)
                reject(err);
            else{
                resolve({commentCreated:true})
            }
        })
    })

    console.log(value)
    return {value, value2}

}

const addComment=async(data)=>{
    const query = `Insert into comments values("${data.comment}", "${data.commentTime}", ${data.id}, ${data.empId})`
    console.log(query)
    const value = await new Promise((resolve, reject)=>{
        con.query(query, (err, res, fields) => {
            if (err)
                reject(err);
            else{
                resolve({commentCreated:true})
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
    updatecomplaint,
    addComment
}