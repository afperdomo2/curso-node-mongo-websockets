/**
 * Archivo de Capa de Red para configurar
 * todas las rutas
 */
const message = require('../components/message/network');
const user = require('../components/user/network');

const routes = (server) => {
    server.use('/message', message);
    server.use('/user', user);
}

module.exports = routes;
