const sql = require('mysql2')
const dotenv = require('dotenv')
const path = require("path");

dotenv.config()

const con = sql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
})

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected Established!");
});

module.exports = {
    con
}