const express = require('express');
const app = express();
const port = 3000;

app.use('/', (req, res) => {
    res.send('Hola');
});

app.listen(port, () => {
    console.log(`Corriendo el servidor en: http//localhost:${port}`);
});
