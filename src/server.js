var express = require("express");
var path = require("path");
var mongo = require("mongoose");
var bodyParser = require('body-parser');
var morgan = require("morgan");
var db = require("./config.js");
var cors = require('cors');

var app = express();

app.use(cors());

var port = process.env.PORT || 3008;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

router.use(function(req, res, next) {

    console.log('hello todo');
    next();
});

app.options('*', cors());

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "X-Requested-With,     Content-Type");

    next();
});

var users = require('./models/userModel');

router.get('/users', (req, res, next) => {
  users.find({},function(err,data){
    if(err){
      res.send(err);
    }
    else{
      res.send(data);
      console.log(data);
    }
  });
});

var post = require('./models/postModel');

router.get('/post', (req, res, next) => {
  users.find({},function(err,data){
    if(err){
      res.send(err);
    }
    else{
      res.send(data);
      console.log(data);
    }
  });
});

var photos = require('./models/photosModel');

router.get('/photos', (req, res, next) => {
  users.find({},function(err,data){
    if(err){
      res.send(err);
    }
    else{
      res.send(data);
      console.log(data);
    }
  });
});

var albums = require('./models/albumsModel');

router.get('/', (req, res, next) => {
  users.find({},function(err,data){
    if(err){
      res.send(err);
    }
    else{
      res.send(data);
      console.log(data);
    }
  });
});


app.use('/api', router);

app.listen(port);
console.log('local port ' + port);

module.exports=app;