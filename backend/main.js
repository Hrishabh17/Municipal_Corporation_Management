const express = require('express')
const parser = require('body-parser')

const app = express()
const cors = require('cors');

app.use(cors());
app.use(express.json({limit: '200mb'}));
app.use(express.urlencoded({
    limit: "200mb",  extended: true, parameterLimit: 1000000
  }));

app.use('/complaint', require('./routes/complaintsRoute'));
app.use('/user', require('./routes/userRoute'));
app.use('/employee', require('./routes/employeeRoute'));

// app.all('*', (req, res)=>{
//     res.statusCode(404).send()
// })

app.listen(4000 || PROCESS.ENV.PORT)