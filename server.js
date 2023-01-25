const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const app = express();
// BodyParser: Permite definir los tipos de Body
// que puede recibir el servidor, como por ejemplo:
// json o urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);// Router debe ir después de bodyParser

const port = 3000;

router.get('/', (req, res) => {
    res.send('Inicio');
});
router.get('/message', (req, res) => {
    console.log(req.headers);// Imprime los headers de la solicitud
    res.header({
        "custom-header": "Valor del header personalizado"
    });
    res.send('Lista de mensajes');// Mensaje de respuesta
});
router.post('/message', (req, res) => {
    res.send('Mensaje añadido');
});
router.delete('/message', (req, res) => {
    console.log(req.query);// Imprime el query de la solicitud
    console.log(req.body);// Imprimie el body de la solicitud
    res.send(`Mensaje: ${req.body.message}`);
});

app.listen(port, () => {
    console.log(`Corriendo el servidor en: http//localhost:${port}`);
});
