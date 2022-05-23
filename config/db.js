const mongoose = require('mongoose');

// var connectionObj = mongoose.createConnection({
//     host:'localhost',
//     user:'root',
//     password:'root',
//     database:'mongo_test'
// })

// console.log(process.env.database);
mongoose.connect('mongodb://localhost:27017/mongo_test')
.then(conn=>{
    console.log('MongoDB connected')
})
.catch(error=>{
    console.log("Error:"+ error.Message)
})

module.exports = mongoose;