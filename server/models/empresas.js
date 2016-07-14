var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Estado = mongoose.model('estado');

var empresaSchema = new Schema({
    nombreSocial: String,
    direccionFisc: String,
    rif: Number,
    telephone: Number,
    mail: String,
    estadoId: {
        type: Schema.ObjectId,
        ref: 'estado'
    },
    direccionDesp: String,
    tipo: String,
    escalaComercial: String,
    credito: String,
    observaciones: String,
    web: String,
    facebook: String,
    twitter: String,
    ranking: Number
});

module.exports = mongoose.model('empresas', empresaSchema);
