/**
 * Archivo de Capa de Red para configurar
 * todas las rutas
 */
const message = require('../components/message/network');

const routes = (server) => {
    server.use('/message', message);
}

module.exports = routes;
