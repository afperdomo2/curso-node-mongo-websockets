/**
 * Capa de configuración del servidor
 */
const express = require('express');
const bodyParser = require('body-parser');
const db = require('./db');
const router = require('./network/routes');

db('mongodb+srv://db_user_curso:rVWPNPD1iqhwseHl@cluster0.ks5tddn.mongodb.net/telegrom'); 

const app = express();
// BodyParser: Permite definir los tipos de Body
// que puede recibir el servidor, como por ejemplo:
// json o urlencoded
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// Router debe ir después de bodyParser
router(app);

// Servir archivos estáticos
app.use('/app', express.static('public'));

const port = 3000;

app.listen(port, () => {
    console.log(`Corriendo el servidor en: http//localhost:${port}`);
});
