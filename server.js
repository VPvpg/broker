const express = require('express');
const { ExpressPeerServer } = require('peer');
const app = express();
const server = require('http').createServer(app);

// Разрешаем CORS для всех доменов
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const peerServer = ExpressPeerServer(server, {
    proxied: true,
    path: '/' // Слушаем корень
});

app.use('/myapp', peerServer); // Весь трафик идет через /myapp

const PORT = process.env.PORT || 3000;
server.listen(PORT);
