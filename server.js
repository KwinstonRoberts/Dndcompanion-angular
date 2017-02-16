// Get dependencies
const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

const axios = require('axios');

const API = 'mongodb://KyleR:351797asd@ds151289.mlab.com:51289/heroku_6v949zvj';

const app = express();



// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));


// Catch all other routes and return the index file
app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'));
});



// Get all posts
app.get('/users', function(req, res) {
  // Get posts from the mock api
  // This should ideally be replaced with a service that connects to MongoDB
  axios.get(API + "/users")
    .then(function(posts) {
      res.status(200).json(posts.data);
    })
    .catch(function(error) {
      res.status(500).send(error)
    });
});


/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '4000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, function() {console.log('API running on localhost:')});
