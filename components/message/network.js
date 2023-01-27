/**
 * Componente para configurar la capa de red
 * de los messages
 */
const express = require('express');
const response = require('../../network/response');

const router = express.Router();

router.get('/', (req, res) => {
    response.success(req, res, 'Lista de mensajes');
});

router.post('/', (req, res) => {
    // Si por query viene la variable 'error', se
    // imprime un error simulado
    if (req.query.error == 'ok') {
        response.error(req, res, 'Error inesperado', 400, 'Estos es una simulación de errores');
    } else {
        response.success(req, res, 'Creado correctamente', 201);
    }
});

router.delete('/', (req, res) => {
    // Imprime los headers de la solicitud
    console.log(req.headers);
    // Imprime el query de la solicitud
    console.log(req.query);
    // Imprimie el body de la solicitud
    console.log(req.body);
    const message = req.body.message != undefined ? req.body.message : 'No hay mensaje';
    res.send(`Mensaje: ${message}`);
});

module.exports = router;
