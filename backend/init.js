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

        const query = 'create trigger insert_ward_number_if_corporator' + ' before insert on employee' + ' for each row' + ' begin' +
        ' if new.designation!="corporator" then' + ' set new.ward_number=null;' + ' end if;' + ' end' 

        con.query(query, function(err, result){
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

