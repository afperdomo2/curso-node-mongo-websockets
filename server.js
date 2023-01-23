const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(router);// Router debe ir después de bodyParser

const port = 3000;

router.get('/', (req, res) => {
    res.send('Inicio');
});
router.get('/message', (req, res) => {
    res.send('Lista de mensajes');
});
router.post('/message', (req, res) => {
    res.send('Mensaje añadido');
});
router.delete('/message', (req, res) => {
    console.log(req.query);
    console.log(req.body);
    res.send(`Mensaje: ${req.body.message}`);
});

app.listen(port, () => {
    console.log(`Corriendo el servidor en: http//localhost:${port}`);
});
