const express = require('express');
const { ExpressPeerServer } = require('peer');
const http = require('http');

const app = express();
const server = http.createServer(app);

// Настройка PeerServer
const peerServer = ExpressPeerServer(server, {
  debug: true,
  path: '/myapp'
});

app.use('/peerjs', peerServer);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Сигнальный сервер запущен на порту ${PORT}`));