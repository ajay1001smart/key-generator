var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var model = require('../models/key');
mongoose.connect('mongodb://localhost:27017/keys');

router.get('/', function(req, res, next) {
  var updatekey = {};
  var availableKeyFlag = false;
  model.find({}, function(err, keys) {
    for(var i=0;i<keys.length;i++){
      console.log('------1--------'+keys[i].available);
      if(keys[i].available===true){
        availableKeyFlag=true;
        updatekey = keys[i];
        break;
      }
    };
    res.send(keys);  
  });
});

module.exports = router;
