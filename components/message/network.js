/**
 * Componente para configurar la capa de red
 * de los messages
 */
const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', (req, res) => {
    const filterMessages = req.query.user || null;
    controller.getMessages(filterMessages)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch((error) => {
            response.error(req, res, 'Unexpected Error', 500, error);
        });
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

router.patch('/:id', (req, res) => {
    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch((error) => {
            response.error(req, res, 'Error interno', 500, error);
        });
});

router.delete('/:id', (req, res) => {
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req, res, `Usuario ${req.params.id} eliminado`);
        })
        .catch((error) => {
            response.error(req, res, 'Error interno', 500, error);
        });
});

module.exports = router;
