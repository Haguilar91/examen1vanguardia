//Requerimientos
var express = require ('express');
var router = express.Router();




//modelos
var Vuelo = require('../models/vuelo');

//rutas
Vuelo.methods(['get','put','post','delete']);
Vuelo.register(router, '/vuelos');


//Retornar modelo
module.exports = router;