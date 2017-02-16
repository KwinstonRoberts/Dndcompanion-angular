/*
 * Copyright (c) 2017 ObjectLabs Corporation
 * Distributed under the MIT license - http://opensource.org/licenses/MIT
 *
 * Written with: mongoose@4.7.7
 * Documentation: http://mongoosejs.com/docs/guide.html
 * A Mongoose script connecting to a MongoDB database given a MongoDB Connection URI.
 */
var mongoose = require('mongoose');

const API = 'mongodb://KyleR:351797asd@ds151289.mlab.com:51289/heroku_6v949zvj';

mongoose.Promise = global.Promise;

mongoose.connect(API);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function callback () {

  // Create song schema
  var userSchema = new Schema({
    "character_name": String,
    "info": {
      "class": String,
      "level": Number,
      "background": String,
      "race": String,
      "alignment": String,
      "experience": Number
    },
    "inspiration": Number,
    "stats": {
      "strength": Number,
      "dexterity": Number,
      "constitution": Number,
      "intelligence": Number,
      "wisdom": Number,
      "charisma": Number
    }
  });
  // Store song documents in a collection called "songs"
  var User = mongoose.model('users', userSchema);

  // Create seed data
  var gustFinger = new User({
    "_id": {
      "$oid": "58a509ed734d1d56393e89c2"
    },
    "character_name": "Gustfinger",
    "info": {
      "class": "Wizard",
      "level": 6,
      "background": "scholar",
      "race": "Air Genesai",
      "alignment": "good",
      "experience": 14000
    },
    "inspiration": 0,
    "stats": {
      "Strength": 12,
      "Dexterity": 15,
      "Constitution": 13,
      "Intelligence": 18,
      "Wisdom": 16,
      "Charisma": 13
    }
  });

  User.insert(gustFinger);

      User.find({ }, function (err, user){

        if(err) throw err;
          console.log(user);
        });

        // Since this is an example, we'll clean up after ourselves.
        mongoose.connection.db.collection('user').drop(function (err) {
          if(err) throw err;
        });
});
  module.exports = User;
