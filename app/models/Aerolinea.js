// grab the mongoose module
var mongoose = require('mongoose');

// define our nerd model
// module.exports allows us to pass this to other files when it is called
module.exports = mongoose.model('Aerolinea', {
	//_id: {type: mongoose.Schema.Types.ObjectId, required: false},
	//_id: Number,

    _id: String,
    linea: String,
    ciudad_origen: String,
    ciudad_destino: String,
    fecha_salida: Date,
    fecha_llegada: Date

});
