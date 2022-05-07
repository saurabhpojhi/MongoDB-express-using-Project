const express = require('express');
var router = express.Router();
var empCtrl = require('./controller/employee');

var bodyParser = require('body-parser');
//var urlencodedParser = bodyParser.urlencoded({extended:false});

router.use(bodyParser.json());

router.post('/add',empCtrl.addEmployee);
router.get('/list',empCtrl.listEmployee);
router.get('/info/:id',empCtrl.infoEmployee);
router.put('/update',empCtrl.updateEmployee);
router.get('/query',empCtrl.queryList); 

module.exports =router;