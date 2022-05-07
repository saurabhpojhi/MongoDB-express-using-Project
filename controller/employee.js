const Employee = require('../models/employee');
const mongoose = require('mongoose');

var addEmployee = (req, res) => {
    //console.log(req.body);

    var data = new Employee({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        department: req.body.department,
        account: {
            mailId: req.body.mailId,
            age: req.body.age,
            phone: req.body.phone
        }
    });
    data.save().then((result) => {
        res.status(200).json({
            message: 'Employee added successfuly', record:result
        })
    })
        .catch(err => console.log(err));
    res.status(200).json({
        message: 'add employees Successfully'
    });
}

var listEmployee = (req,res) => {
    let query ={
        'account.age':26
    }
    Employee.find(query, function (err, docs) {
        if(err) throw err;
        res.status(200).json({
            message: 'list employees',docs});
    })

}
var infoEmployee = (req,res) => {
    //console.log(req.query.id);
    let query ={
        '_id':req.query.id
    }
    Employee.find(query, function (err, docs) {
        if(err) throw err;
        res.status(200).json({
            message: 'list employees',docs});
    })

}

var updateEmployee = (req,res) => {
    
    Employee.updateOne({_id:req.body.id}, 
        {$set:{
            name:req.body.name,
            email:req.body.email
        }},
        function (err, docs) {
        if(err) throw err;
        res.status(200).json({
            message: 'list employees',docs});
    })

}
module.exports = {
    addEmployee,
    listEmployee,
    infoEmployee,
    updateEmployee
}