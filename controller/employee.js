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

var queryList = async (req,res)=>{
        var results = await Employee.find(
            {                               // this is condition part if you want to email only like saurabh@gmail.com then conditon query apply
             // email:'saurabh@gmail.com',  // yeha pe is mail id ke jitne v honge woh sab email show hoga
           // department:'sw',  // here or conditon  
           // 'account.age':26  // here And condition
          // 'account.age':{$gt:26}  // yeha pe $Gt means greaterthan 26 se upar ke jitne v age h woh sab show krna chahiye
           //'account.age':{$gte:26}      // yeha pe $GTE ka matlab  greaterthan 26 se upar ke jitne v age h woh sab show krna chahiye      
           //'account.age':{$lt:27}      // yeha pe $lt ka matlab  lessthan 27

           // or condtion apply
          // $or:[{department:'sw'},{'account.age':26}]  // mujhe sw department chahiye jinki age 26 ho
          
          // like 
        //  email:/saurabh/    // yeha pe jinke saurabh se email hone woh sab show karega like ke throw


            },
            {name:1,email:1,'account.age':1, _id:0, department:1}    // here select operation perform like suppose we take 1 means only name take if 0 means not 
            ).sort({name:-1})
           /// .distinct('department') ;  //limit(2);    // here sort and limit uses 
            .count({'account.mailId':{$exists:true}});      // here count 
        res.status(200).json({
            message:'query', record:results
        });
}

module.exports = {
    addEmployee,
    listEmployee,
    infoEmployee,
    updateEmployee,
    queryList
}