const express = require('express');
const { ExpressPeerServer } = require('peer');
const app = express();
const server = require('http').createServer(app);

const peerServer = ExpressPeerServer(server, {
    path: '/myapp'
});

app.use('/myapp', peerServer);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));