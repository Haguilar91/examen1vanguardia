//dependencias wn
var  restful = require('node-restful');
var mongoose  = restful.mongoose;

//Esquema

var vueloSchema = new mongoose.Schema({
    "_id": String,
    linea: String,
    ciudad_origen: String,
    ciudad_destino: String,
    fecha_salida: Date,
    fecha_llegada: Date

});

//Retornando modelo
module.exports = restful.model('Vuelos',vueloSchema);