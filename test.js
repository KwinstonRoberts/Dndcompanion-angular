router.get('/test', function(req, res) {
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
  });/**
 * Created by KyleW on 2017-02-15.
 */
