/**
 * Componente para configurar la capa de red
 * de los chats
 */
const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/:userId', (req, res) => {
    controller.getChats(req.params.userId)
        .then((chatList) => {
            response.success(req, res, chatList, 200);
        })
        .catch((error) => {
            response.error(req, res, 'Unexpected Error', 500, error);
        });
});

router.post('/', (req, res) => {
    controller.addChat(req.body.users)
        .then((chatCreated) => {
            response.success(req, res, chatCreated, 201);
        })
        .catch((error) => {
            response.error(req, res, 'Información invalida', 400, error);
        });
});

module.exports = router;
