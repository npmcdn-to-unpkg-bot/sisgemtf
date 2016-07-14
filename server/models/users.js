var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    username: String,
    typeUser: Number,
    pass: String,
    firstName: String,
    lastName: String
});

module.exports = mongoose.model('users', userSchema);
