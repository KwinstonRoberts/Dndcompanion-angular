const express = require('express');
const router = express.Router();
var mongoose=require('mongoose');

const API = 'mongodb://KyleR:351797asd@ds151289.mlab.com:51289/heroku_6v949zvj';

mongoose.connect(API);

var Schema = mongoose.Schema;

var userSchema = new Schema({
  "Character_Name": "String",
  "Class": "String",
  "Background":"String",
  "Player_Name":"String",
  "Race":"String",
  "Alignment": "String",
  "Experience": "Number"


});
router.get('/api/user',function(req,res) {
  var User = mongoose.model('User', userSchema);

// create a new user
  var newUser = User({
    Character_name: 'Topaz',
    Class: 'Psion',
    Background: "Scholar",
    Player_name: "Kyle Roberts",
    Race: 'Shardmind',
    Alignment: 'Good',
    Experience: 1000000
  });

  newUser.save(function (err) {
    if (err) throw err;

    return newUser;
  });
});
  module.exports = User;
