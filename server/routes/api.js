const express = require('express');
const router = express.Router();
const axios = require('axios');

const API = 'mongodb://KyleR:351797asd@ds151289.mlab.com:51289/heroku_6v949zvj';


router.get('/', function(req, res) {
  res.send('api works');
});

// Get all posts
router.get('/users', function(req, res) {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(API + "/users")
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error)
    });
});

module.exports = router;
