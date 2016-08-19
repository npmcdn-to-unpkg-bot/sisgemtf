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
    estado: Schema.Types.ObjectId,
    ciudad: String,
    municipio: Schema.Types.ObjectId,
    parroquia: String,
    direccionHab: String,
    direccionDesp: String,
    observaciones: String,
    facebook: String,
    twitter: String,
    ranking: Number,
    empresaId: Schema.Types.ObjectId
});

module.exports = mongoose.model('naturales', naturalSchema);
