var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/key');
mongoose.connect('mongodb://localhost:27017/keys');

router.patch('/:key', function(req, res, next) {
  model.findOneAndUpdate({key:req.params.key},{$set:{available:true,block:false}}, {new: true},function(err,result) {
    if (err)
       throw err;
    else{
      console.log('update key parameters successfully...');
      res.send(result);
    }
});
});

module.exports = router;
