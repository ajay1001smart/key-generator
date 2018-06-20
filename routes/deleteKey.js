var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/key');
mongoose.connect('mongodb://localhost:27017/keys');

router.delete('/:key', function(req, res, next) {
  model.findOneAndRemove({key:req.params.key},function(err,result) {
    if (err)
       throw err;
    else{
      console.log('delete key successfully...');
      res.send(result);
    }
});
});

module.exports = router;
