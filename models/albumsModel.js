const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const AlbumsSchema = new Schema({ any:{} });

module.exports = mongoose.model('albums', AlbumsSchema ,'albums');