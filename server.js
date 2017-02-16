const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const API = 'mongodb://KyleR:351797asd@ds151289.mlab.com:51289/heroku_6v949zvj';
var mongoose=require('mongoose');

var db = mongoose.connect(API);


const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Set our api routes

// Catch all other routes and return the index file
app.get('*', function(req, res){
  res.sendFile(path.join(__dirname, 'dist/index.html'))
})

app.get('/api', function(req, res){

  db.find({}, function(err,user){

    if (err) console.log(err);

    console.log(user);

  })

});

/**
 * Get port from environment and store in Express.
 */
const port = process.env.PORT || '3000';
app.set('port', port);

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */
server.listen(port, function ( ) {
  console.log("Server started at port " + port);
});
