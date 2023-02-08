/**
 * Capa de configuración del servidor
 */
const express = require('express');
const app = express();
const server = require('http').Server(app);

const config = require('./config');

const socket = require('./socket');
const bodyParser = require('body-parser');
const db = require('./db');
const router = require('./network/routes');

db(config.dbUrl); 

// BodyParser: Permite definir los tipos de Body
// que puede recibir el servidor, como por ejemplo:
// json o urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// Router debe ir después de bodyParser
router(app);

socket.connect(server);

// Servir archivos estáticos
app.use(`/${config.publicRoute}`, express.static('public'));

server.listen(config.port, () => {
    console.log(`Servidor de estáticos: ${config.host}:${config.port}/app`);
    console.log(`Corriendo el servidor HTTP en: ${config.host}:${config.port}`);
});
