const express = require('express');
const { ExpressPeerServer } = require('peer');
const app = express();
const server = require('http').createServer(app);

// Разрешаем CORS для всех
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Настройка PeerServer: используем path: '/' для обработки вложенных запросов
const peerServer = ExpressPeerServer(server, {
    path: '/'
});

app.use('/myapp', peerServer);

server.listen(process.env.PORT || 3000);
