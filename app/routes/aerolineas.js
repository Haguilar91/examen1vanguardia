var express = require('express');
var router = express.Router();

// server routes ===========================================================
// handle things like api calls
// authentication routes

//tomando el modelo
var Aerolinea = require('../models/Aerolinea');

router.get('/',function (req, res){
    Persona.find(function (err, aerolineas) {
        if (err)
            res.status(500).send('Error en la base de datos');
        else
            res.status(200).json(aerolineas);
    });
});

router.get('/:id',function(req,res){
    Persona.findById(req.params.id,function(err, aerolinea) {
        if (err)
            res.status(500).send('Error en la base de datos');
        else{
            if (persona != null) {
                res.status(200).json(aerolinea);
            }
            else
                res.status(404).send('No se encontro esta linea aerea.');
        }
    });
});

router.post('/',function(req,res){
    //crea un objeto pero del modelo Aerolinea

    var aerolinea1 = new Aerolinea({
    id: req.body.id,
    linea:req.body.linea,
    ciudad_origen:req.body.ciudad_origen,
    ciudad_destino:req.body.cidad_destino,
		fecha_salida: req.body.fecha_salida,
    fecha_llegada: req.body.fecha_llegada
	});

    //guarda una persona en la base de datos
    aerolinea1.save(function (error, aerolinea1) {
        if (error) {
            res.status(500).send('No se ha podido agregar.');
        }
        else {
            res.status(200).json({_id: aerolinea1._id}); //envía al cliente el id generado
        }
    });
});

router.put('/:id',function(req,res){

    //Modificar con Find ID
    Persona.findById(req.params.id,function(err, aerolinea) {
        if (err)
            res.status(500).send('Error en la base de datos');
        else{
            if (aerolinea != null){

              aerolinea.id: req.body.id,
              aerolinea.linea:req.body.linea,
              aerolinea.ciudad_origen:req.body.ciudad_origen,
              aerolinea.ciudad_destino:req.body.cidad_destino,
          		aerolinea.fecha_salida: req.body.fecha_salida,
              aerolinea.fecha_llegada: req.body.fecha_llegada

                persona.save(function (error, aerolinea1) {
                    if (error)
                        res.status(500).send('Error en la base de datos');
                    else {
                        res.status(200).send('Modificado exitosamente');
                    }
                });
            }
            else
                res.status(404).send('No se encontro ese vuelo');
        }
    });
});

router.delete('/:id',function(req,res){
    //Eliminar con Find ID
    Persona.findById(req.params.id,function(err, aerolinea) {
        if (err)
            res.status(500).send('Error en la base de datos');
        else{
            if (persona != null) {
                persona.remove(function (error, result) {
                    if (error)
                        res.status(500).send('Error en la base de datos');
                    else {
                        res.status(200).send('Eliminado exitosamente');
                    }
                });
            }
            else
                res.status(404).send('No se encontro ese vuelo');
        }
    });
});

module.exports = router;
