const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mongo_test')
.then(conn=>{
    console.log('MongoDB connected')
})
.catch(error=>{
    console.log("Error:"+ error.Message)
})

module.exports = mongoose;