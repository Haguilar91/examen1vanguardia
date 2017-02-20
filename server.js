//Dependencias
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require ('body-parser')
var morgan = require('morgan');
var path = require('path');
//Mongo papu
mongoose.connect('mongodb://localhost/vuelos');

//Express wn



var app = express();

app.use(function (req, res, next) {
  req.header("Content-Type",'application/json');
  next();
});

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
var port = process.env.PORT || 3000;



//Las rutas wn
app.use('/api', require ('./routes/api'));


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/vuelos', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});





//Inicio el Server wn
app.listen(port);
console.log('La API Corre en el puerto 3000 wn');