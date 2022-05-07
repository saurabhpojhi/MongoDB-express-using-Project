const mongoose = require('mongoose');

var employeeSchema = new mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    email:String,
    department:String,
    account:{
        mailId:String,
        age:Number,
        Phone:Number
    }
});

let emp = mongoose.model('employee',employeeSchema);

module.exports=emp;

