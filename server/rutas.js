module.exports = function(app) {

    //Modelos
    var estados = require('./models/estados');
    var empresas = require('./models/empresas');
    var naturales = require('./models/naturales');
    var users = require('./models/users');

    // GET
    findAllContacts = function(req, res) {
        naturales.find(function(err, contacto) {
            if (!err) {
                res.send(contacto)
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };
    findAllEmpresas = function(req, res) {
        empresas.find(function(err, empresa) {
            if (!err) {
                res.send(empresa)
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };

    findContactByID = function(req, res) {
        naturales.findById(req.params.id, function(err, contacto) {
            if (!err) {
                res.send(contacto)
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };
    findEmpresaByID = function(req, res) {
        empresas.findById(req.params.id, function(err, empresa) {
            if (!err) {
                res.send(empresa)
            } else {
                console.log('ERROR: ' + err);
            }
        });
    };

    findAllEstados = function(req, res) {
        estados.find(function(err, estado){
            if (!err) {
                res.send(estado)
            } else {
                console.log('ERROR' + err);
            }
        });
    }
    findAllEstadosById = function(req, res) {
        estados.findById(req.params.id, function(err, estado){
            if (!err) {
                res.send(estado)
            } else {
                console.log('ERROR' + err);
            }
        });
    }

    // POST
    addContact = function(req, res) {
        console.log('POST');
        console.log(req.body);

        var contacto = new naturales({
            nombre: req.body.nombre,
            apellidos: req.body.apellidos,
            birthDate: req.body.birthDate,
            idLegal: req.body.idLegal,
            estado: req.body.estado,
            municipio: req.body.municipio,
            parroquia: req.body.parroquia,
            ciudad: req.body.ciudad,
            telefonos: req.body.telefonos,
            correos: req.body.correos,
            direccionHab: req.body.direccionHab,
            direccionDesp: req.body.direccionDesp,
            observaciones: req.body.observaciones,
            facebook: req.body.facebook,
            twitter: req.body.twitter,
            ranking: req.body.ranking,
            empresa: req.body.empresa
        });
        contacto.save(function(err) {
            if (!err) {
                console.log('contacto guardado');
            } else {
                console.log('ERROR: ' + err);
            }
        });

        res.send(contacto);
    };
    addEmpresa = function(req, res) {
        console.log('POST');
        console.log(req.body);

        var empresa = new empresas({
            nombreSocial: req.body.nombreSocial,
            direccionFisc: req.body.direccionFisc,
            rif: req.body.rif,
            telephone: req.body.telephone,
            mail: req.body.mail,
            direccionDesp: req.body.direccionDesp,
            tipo: req.body.tipo,
            escalaComercial: req.body.escalaComercial,
            credito: req.body.credito,
            observaciones: req.body.observaciones,
            web: req.body.web,
            facebook: req.body.facebook,
            twitter: req.body.twitter,
            ranking: req.body.ranking
        });
        empresa.save(function(err) {
            if (!err) {
                console.log('contacto guardado');
            } else {
                console.log('ERROR: ' + err);
            }
        });

        res.send(empresa);
    }

    // PUT
    updateContact = function(req, res) {
        naturales.findById(req.params.id, function(err, contacto) {
            contacto.nombre = req.body.nombre;
            contacto.birdDate = req.body.birdDate;
            contacto.idLegal = req.body.idLegal;
            contacto.telephone = req.body.telephone;
            contacto.mail = req.body.mail;
            contacto.direccionHab = req.body.direccionHab;
            contacto.direccionDesp = req.body.direccionDesp;
            contacto.observaciones = req.body.observaciones;
            contacto.facebook = req.body.facebook;
            contacto.twitter = req.body.twitter;
            contacto.ranking = req.body.ranking;
            contacto.empresa = req.body.empresa;

            contacto.save(function(err) {
                if (!err) {
                    console.log('contacto actualizado');
                } else {
                    console.log('ERROR: ' + err);
                }
            });
        });
    };
    updateEmpresa = function(req, res) {
        empresas.findById(req.params.id, function(err, empresa) {
            empresa.nombreSocial = req.body.nombreSocial;
            empresa.direccionFisc = req.body.direccionFisc;
            empresa.rif = req.body.rif;
            empresa.telephone = req.body.telephone;
            empresa.mail = req.body.mail,
            empresa.direccionDesp = req.body.direccionDesp;
            empresa.tipo = req.body.tipo;
            empresa.escalaComercial = req.body.escalaComercial;
            empresa.credito = req.body.credito;
            empresa.observaciones = req.body.observaciones;
            empresa.web = req.body.web;
            empresa.facebook = req.body.facebook;
            empresa.twitter = req.body.twitter;
            empresa.ranking = req.body.ranking;

            empresa.save(function(err) {
                if (!err) {
                    console.log('contacto actualizado');
                } else {
                    console.log('ERROR: ' + err);
                }
            });
        });
    };

    // DELETE
    deleteContact = function(req, res) {
        naturales.findById(req.params.id, function(err, contacto) {
            contacto.remove(function(err) {
                if (!err) {
                    console.log('contacto eliminado');
                } else {
                    console.log('ERROR: ' + err);
                }
            });
        });
    };
    deleteEmpresa = function(req, res) {
        empresas.findById(req.params.id, function(err, empresa) {
            empresa.remove(function(err) {
                if (!err) {
                    console.log('contacto eliminado');
                } else {
                    console.log('ERROR: ' + err);
                }
            });
        });
    };

    // Rutas
    app.get('/contactos', findAllContacts);
    app.get('/contactos/:id', findContactByID);
    app.post('/contactos', addContact);
    app.put('/contactos/:id', updateContact);
    app.delete('/contactos/:id', deleteContact);

    app.get('/empresas', findAllEmpresas);
    app.get('/empresas/:id', findEmpresaByID);
    app.post('/empresas', addEmpresa);
    app.put('/empresas/:id', updateEmpresa);
    app.delete('/empresas/:id', deleteEmpresa);

    app.get('/estados', findAllEstados);
    app.get('/estados/:id', findAllEstados);
}
