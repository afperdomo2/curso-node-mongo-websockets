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
    const { user, message } = req.body;
    controller.addMessage(user, message)
        .then((messageCreated) => {
            response.success(req, res, messageCreated, 201);
        })
        .catch((error) => {
            response.error(req, res, 'Información invalida', 400, error);
        });
});

router.patch('/:id', (req, res) => {
    const id = req.params.id;
    const message = req.body.message;
    controller.updateMessage(id, message)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch((error) => {
            response.error(req, res, 'Error interno', 500, error);
        });
});

router.delete('/:id', (req, res) => {
    const id = req.params.id;
    controller.deleteMessage(id)
        .then(() => {
            response.success(req, res, `Usuario ${id} eliminado`);
        })
        .catch((error) => {
            response.error(req, res, 'Error interno', 500, error);
        });
});

module.exports = router;
