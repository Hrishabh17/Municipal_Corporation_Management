const sql = require('mysql')
const lineReader = require('line-reader');
const fs = require('fs')
const path = require("path");

const args = process.argv
console.log(__dirname)

if(process.argv.length===4){
    fs.writeFileSync(path.join(__dirname, "..", ".env"),
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

lineReader.eachLine('../database/tables.txt', (line, last) => {
    if(line!==''){
        con.query(line, function(err, result){
            if(err){
                throw err
            }
        })
    }
    if(last){
        console.log('Database initialized successfully')
        con.end(function(err) {
            if (err) throw err;
            console.log("Connected Closed!");
          });
    }
});
