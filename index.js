const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

const PORT = 8080;

app.use(express.static('public'));

io.on('connection', (socket) => {
    console.log('Nuevo cliente conectado');
    socket.emit('mensaje', 'Bienvenido!');
});

setInterval(() => {
    io.emit('mensaje', 'hola a todos!');
}, 3000);

server.listen(8080, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});
