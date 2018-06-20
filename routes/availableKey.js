var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/key');
mongoose.connect('mongodb://localhost:27017/keys');

router.patch('/', function(req, res, next) {
    model.findOneAndUpdate({available:true},{$set:{available:false,block:true}}, {new: true},function(err,result) {
      if (err)
         throw err;
      else{
        console.log('update key parameters successfully...');
        if(result){
          res.send('Available key:'+result.key);
        }
        else{
          res.send('ERROR: 404- NO Available Key...');
        }
      }
  });
});

module.exports = router;
