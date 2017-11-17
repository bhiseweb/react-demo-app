const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const PostSchema = new Schema({ any:{} });

module.exports = mongoose.model('post', PostSchema ,'post');