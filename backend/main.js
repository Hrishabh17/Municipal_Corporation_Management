const express = require('express')
const parser = require('body-parser')

const app = express()
const cors = require('cors');

app.use(cors());
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

// Number of complaints (send to the home page)
app.use('/home', (req, res, next)=>{
    res.send([{total: 100,
            resolved:58,
            pending:42}])
})

app.use('/complaint', require('./routes/complaints'));

// app.all('*', (req, res)=>{
//     res.statusCode(404).send()
// })

app.listen(4000 || PROCESS.ENV.PORT)