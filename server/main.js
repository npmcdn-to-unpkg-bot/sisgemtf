var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var server = require('http').Server(app);
var io = require('socket.io')(server);

mongoose.connect('mongodb://admin:Jinj!n224@ds031608.mlab.com:31608/sisgemtf', function(err, res){
    if(err) console.log('ERROR: conectando a la base de datos: ' + err);
    else console.log("Conexion a la BD satisfactoria");
});

app.use(express.static('public'));
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

var router =  express.Router();

router.get('/', function(req, res){
    res.status(200).sendfile('index.html');
});

require('./rutas')(app);

app.use(router);
app.listen(8080, function(){
    console.log('Servidor Node corriendo por el puerto 8080');
});
