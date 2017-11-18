const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const AlbumSchema = new Schema({ 
  title: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }

});

module.exports = mongoose.model('albums', AlbumSchema ,'albums');