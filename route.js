const express = require('express');
var router = express.Router();


router.get('/', (req,res)=>{
    res.send("hello");
});

router.get('/post', (req,res)=>{
    res.send(" post hello");
});

router.get('/blog', (req,res)=>{
    res.send(" blog hello");
});

module.exports =router;