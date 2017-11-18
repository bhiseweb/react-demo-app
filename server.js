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

//app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var router = express.Router();

router.use(function(req, res, next) {
    next();
});

app.options('*', cors());

app.all('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header("Access-Control-Allow-Headers", "X-Requested-With,     Content-Type");

    next();
});

var User = require('./models/userModel');


router.get('/users', (req, res, next) => {
  User.find({},function(err,data){
    if(err){
      res.send(err);
    }
    else{
      res.send(data);
      console.log(data);
    }
  });
});

router.post('/users', (req, res, next) => {
  let user = new User(req.body)
  user.save(function(err,data){
    if(err){
      res.send(err);
    }
    else{
      res.send(data);
      console.log(data);
    }
  });
});

var Post = require('./models/postModel');

router.get('/post', (req, res, next) => {
  Post.find({},function(err,data){
    if(err){
      res.send(err);
    }
    else{
      res.send(data);
      console.log(data);
    }
  });
});

var Photo = require('./models/photosModel');

router.get('/photos', (req, res, next) => {
  Photo.find({},function(err,data){
    if(err){
      res.send(err);
    }
    else{
      res.send(data);
      console.log(data);
    }
  });
});

var Album = require('./models/albumsModel');

router.get('/albums', (req, res, next) => {
  Album.find({},function(err,data){
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