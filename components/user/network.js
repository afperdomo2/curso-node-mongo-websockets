const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');

const router = express.Router();

router.get('/', (req, res) => {
    controller.getUsers()
        .then((userList) => {
            response.success(req, res, userList, 200);
        })
        .catch((error) => {
            response.error(req, res, 'Unexpected Error', 500, error);
        });
});

router.post('/', (req, res) => {
    const { name, lastName } = req.body;
    controller.addUser(name, lastName)
        .then((userCreated) => {
            response.success(req, res, userCreated, 201);
        })
        .catch((error) => {
            response.error(req, res, 'Información invalida', 400, error);
        });
});

module.exports = router;
