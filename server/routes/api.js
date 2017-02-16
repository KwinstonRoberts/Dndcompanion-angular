const express = require('express');
const router = express.Router();
var mongoose=require('mongoose');

const API = 'mongodb://KyleR:351797asd@ds151289.mlab.com:51289/heroku_6v949zvj';

mongoose.connect(API);


router.get('/api',function(req,res) {

  User.find({},function(err, user) {
    if (err) console.log(err);
    console.log(user)
  });
});
  module.exports = User;
