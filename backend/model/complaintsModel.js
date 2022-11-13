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

    const query = `Insert into complaint values(${id}, "${data.description}", "${data.problemImage}", 
                    "Pending", "${data.location}", ${null}, ${null}, "${time}", "${inDate}", ${null}, ${null}, "${data.address}", ${null},
                    ${null})`
                    
    con.query(query, (err, res, fields)=>{
        if(err) throw err;
    })
    const registrationTime = `${inDate} ${time}`
    return {complaintId:id, registrationTime:registrationTime, location:data.location, description:data.description};
}

module.exports = {
    registerComplaints
}