const express = require('express')
const parser = require('body-parser')
const {con} = require('./database')

const app = express()
const cors = require('cors');

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.use('/complaint', require('./routes/complaintsRoute'));
app.use('/user', require('./routes/userRoute'));

// app.all('*', (req, res)=>{
//     res.statusCode(404).send()
// })

app.listen(4000 || PROCESS.ENV.PORT)