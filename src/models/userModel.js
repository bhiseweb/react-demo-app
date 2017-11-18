const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const UserSchema = new Schema({ 
  name: String,
  email: String,
  address: String
 });

module.exports = mongoose.model('users', UserSchema);