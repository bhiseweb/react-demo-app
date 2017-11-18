const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const PhotoSchema = new Schema({
  title: String,
  url: String,
  album: {
    type: Schema.Types.ObjectId,
    ref: "Album"
  }
});

module.exports = mongoose.model('photos', PhotoSchema ,'photos');