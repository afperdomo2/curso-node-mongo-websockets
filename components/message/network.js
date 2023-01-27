/**
 * Componente para configurar la capa de red
 * de los messages
 */
const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', (req, res) => {
    response.success(req, res, 'Lista de mensajes');
});

router.post('/', (req, res) => {
    controller.addMessage(req.body.user, req.body.message)
        .then((userCreated) => {
            response.success(req, res, userCreated, 201);
        })
        .catch((error) => {
            response.error(req, res, 'Información invalida', 400, error);
        });
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
