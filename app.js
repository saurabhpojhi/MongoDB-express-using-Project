const express = require('express');
const app = express();
const port = 3000;

var logger = require('morgan');
//require('dotenv').config();

var route = require('./route');
app.use(logger('dev'));
app.use('/v1', route);
app.use('/employee', require('./routes/employee_route'));


var Employee = require('./models/employee');

require('./config/db');    // add db config file

Employee.find({},function(err,docs){
   // console.log(docs);
})

app.listen(port,()=>{
    console.log(`server is running on http://localhost:${port}`);
})