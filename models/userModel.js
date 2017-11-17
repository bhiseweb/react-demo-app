const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const UserSchema = new Schema({ any:{} });

module.exports = mongoose.model('users', UserSchema ,'users');