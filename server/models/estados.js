var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var estadoSchema = new Schema();

module.exports = mongoose.model('estado', estadoSchema);
