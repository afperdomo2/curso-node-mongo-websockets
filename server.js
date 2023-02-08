/**
 * Capa de configuración del servidor
 */
const express = require('express');
const app = express();
const server = require('http').Server(app);

const socket = require('./socket');
const bodyParser = require('body-parser');
const db = require('./db');
const router = require('./network/routes');

const URL = 'mongodb+srv://db_user_curso:rVWPNPD1iqhwseHl@cluster0.ks5tddn.mongodb.net/telegrom';
const PORT = 3000;

db(URL); 

// BodyParser: Permite definir los tipos de Body
// que puede recibir el servidor, como por ejemplo:
// json o urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// Router debe ir después de bodyParser
router(app);

socket.connect(server);

// Servir archivos estáticos
app.use('/app', express.static('public'));

server.listen(PORT, () => {
    console.log(`Servidor de estáticos: http//localhost:${PORT}/app`);
    console.log(`Corriendo el servidor HTTP en: http//localhost:${PORT}`);
});
