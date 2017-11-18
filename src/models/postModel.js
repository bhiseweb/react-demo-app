const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const PostSchema = new Schema({ 
  title: String,
  body: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
});

module.exports = mongoose.model('post', PostSchema ,'post');