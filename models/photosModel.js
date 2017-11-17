const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const PhotosSchema = new Schema({ any:{} });

module.exports = mongoose.model('photos', PhotosSchema ,'photos');