const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
const response = require('./network/response');

const app = express();
// BodyParser: Permite definir los tipos de Body
// que puede recibir el servidor, como por ejemplo:
// json o urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);// Router debe ir después de bodyParser

// Servir archivos estáticos
app.use('/app', express.static('public'));

const port = 3000;

router.get('/message', (req, res) => {
    response.success(req, res, 'Lista de mensajes');
});
router.post('/message', (req, res) => {
    // Si por query viene la variable 'error', se
    // imprime un error simulado
    if (req.query.error == 'ok') {
        response.error(req, res, 'Error simulado', 400);
    } else {
        response.success(req, res, 'Creado correctamente', 201);
    }
});
router.delete('/message', (req, res) => {
    res.send(`Mensaje: ${req.body.message}`);
});
app.listen(port, () => {
    console.log(`Corriendo el servidor en: http//localhost:${port}`);
});
router.get('/', (req, res) => {
    // Imprime los headers de la solicitud
    console.log(req.headers);
    // Imprime el query de la solicitud
    console.log(req.query);
    // Imprimie el body de la solicitud
    console.log(req.body);
    res.send('Inicio');
});
