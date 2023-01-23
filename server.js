const express = require('express');
const router = express.Router();

const app = express();
const port = 3000;

app.use(router);

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
    res.send('Mensaje borrado');
});

app.listen(port, () => {
    console.log(`Corriendo el servidor en: http//localhost:${port}`);
});
