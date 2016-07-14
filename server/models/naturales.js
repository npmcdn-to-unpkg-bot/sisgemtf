var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Empresa = mongoose.model('empresas');
var Estado = mongoose.model('estado');

var naturalSchema = new Schema({
    nombreApellido: String,
    birthDate: String,
    idLegal: String,
    telefonos: Array,
    correos: Array,
    estado: String,
    municipio: String,
    parroquia: String,
    ciudad: String,
    direccionHab: String,
    direccionDesp: String,
    observaciones: String,
    facebook: String,
    twitter: String,
    ranking: Number,
    empresaId: {
        type: Schema.ObjectId,
        ref: 'empresa'
    }
});

module.exports = mongoose.model('naturales', naturalSchema);
