const express = require('express');
const { ExpressPeerServer } = require('peer');
const app = express();
const server = require('http').createServer(app);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const peerServer = ExpressPeerServer(server, {
    path: '/'
});

// Слушаем дефолтный путь, который запрашивает клиент
app.use('/peerjs', peerServer); 

server.listen(process.env.PORT || 3000);
