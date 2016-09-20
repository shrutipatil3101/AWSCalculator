
var express = require('express');
var router = express.Router();
var serverpath = require('../routes/CalciSend.js');
router.post('/add',function(req,res)
{
    var result = serverpath.add(req.body.first_num,req.body.second_num);
    res.send(String(result));
})
router.post('/subtract',function(req,res)
{
    var result = serverpath.subtract(req.body.first_num,req.body.second_num);
    res.send(String(result));
})
router.post('/multiply',function(req,res)
{
    var result = serverpath.multiply(req.body.first_num,req.body.second_num);
    res.send(String(result));
})
router.post('/divide',function(req,res)
{
    var result = serverpath.divide(req.body.first_num,req.body.second_num);
    res.send(String(result));
})
module.exports = router;