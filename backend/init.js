const sql = require('mysql2')
const lineReader = require('line-reader');
const fs = require('fs')
const path = require("path");

if(process.argv.length===4){
    fs.writeFileSync(path.join(__dirname, ".", ".env"),
    `DB_USER=${process.argv[2]}\n` +
    `DB_NAME=dbms\n` +
    `DB_PASSWORD=${process.argv[3]}\n` +
    `DB_HOST=localhost\n`
    )
    con = sql.createConnection({
        host:'localhost',
        user:process.argv[2],
        password:process.argv[3],
    })
    console.log("Credentials saved to .env file");
}

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected Established!");
  });

lineReader.eachLine('../database/tables2.txt', (line, last) => {
    if(line!==''){
        con.query(line, function(err, result){
            if(err){
                throw err
            }
        })
    }
    if(last){

        const query = "create event if not exists warn_a_day_before_add_complaint_number"+
        " on schedule every 10 second"+
        " do replace into warning(notification,complaint_number) select '1 day Remain',complaint_number from complaint where complaint_status!='Resolved' and current_date()>= DATE_SUB(estimated_time, INTERVAL 1 day) and current_date()<estimated_time;"

        const query2 = 'create trigger insert_ward_number_if_corporator' + ' before insert on employee' + ' for each row' + ' begin' +
        ' if new.designation!="corporator" then' + ' set new.ward_number=null;' + ' end if;' + ' end' 


        const query3 = "create event if not exists set_priority_2_day"+
        " on schedule every 10 second"+
        " do update complaint set priority='medium' where complaint_status!='Resolved' and current_date()>= DATE_SUB(estimated_time, INTERVAL 2 day) and current_date()<DATE_SUB(estimated_time, INTERVAL 1 day);"

        const query4 = "create event if not exists set_priority_1_day"+
        " on schedule every 10 second" + 
        " do update complaint set priority='high' where complaint_status!='Resolved' and current_date()>= DATE_SUB(estimated_time, INTERVAL 1 day) and current_date()<estimated_time;"


        con.query(query, function(err, result){
            if(err){
                throw err
            }
            else{
                console.log('Event_1 generated successfully')
            }
        })

        con.query(query3, function(err, result){
            if(err){
                throw err
            }
            else{
                console.log('Event_3 generated successfully')
            }
        })

        con.query(query4, function(err, result){
            if(err){
                throw err
            }
            else{
                console.log('Event_4 generated successfully')
            }
        })

        con.query(query2, function(err, result){
            if(err){
                throw err
            }
            else{
                console.log('Trigger generated successfully')
                console.log('Database initialized successfully')
                con.end(function(err) {
                    if (err) throw err;
                    console.log("Connected Closed!");
                });
            }
        })
    }
});

