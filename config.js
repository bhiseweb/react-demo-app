var mongo = require("mongoose");
var db =  mongo.connect("mongodb://127.0.0.1:27017/todoDB",
  {useMongoClient: true},
  function(err, response){
    if(err){ console.log('Failed to connect'); }
    else{ console.log('Connected!!!'); }
  }
);
module.exports = db;