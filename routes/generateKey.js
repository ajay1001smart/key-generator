var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/key');
mongoose.connect('mongodb://localhost:27017/keys');
var constants = require('../common/constants.json');

var getRandomKey = function(){
  return Math.floor(Math.random() * Math.floor(constants.MAX));
};

router.post('/', function(req, res, next) {
  var uniqueKey = true;
  var randomKey=getRandomKey();
  model.find({}, function(err, keyArrayPool) {
  for(var i=0;i<keyArrayPool.length;i++){
      if(keyArrayPool[i].key === randomKey.toString()){
          uniqueKey=false;
      }
  }
  });
  if(uniqueKey){
      var key = new model({
        "key" : randomKey.toString(),
        "available" : true,
        "block" : false
      });
      key.save(function(err) {
        if (err)
           throw err;
        else 
           console.log('save key successfully...');
    });
    res.send({
      "key" : randomKey.toString(),
      "available" : true,
      "block" : false
  })
  }
  else{
    res.send('Sorry!!! something went wrong, please try again...')
  }
});

module.exports = router;
