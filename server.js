const express = require('express');
const { ExpressPeerServer } = require('peer');
const app = express();
const server = require('http').createServer(app);

// CORS заголовки
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

// Настройка PeerServer: убираем лишний путь, чтобы PeerJS находил свои ресурсы
const peerServer = ExpressPeerServer(server, {
    debug: true,
    path: '/' 
});

app.use('/myapp', peerServer);

server.listen(process.env.PORT || 3000);
