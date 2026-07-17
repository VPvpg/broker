const express = require('express');
const { ExpressPeerServer } = require('peer');
const app = express();
const server = require('http').createServer(app);

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

// Обработка всех возможных вариантов путей для предотвращения 404
app.use('/myapp/peerjs', ExpressPeerServer(server, { path: '/' }));
app.use('/myapp', ExpressPeerServer(server, { path: '/peerjs' }));
app.use('/peerjs', ExpressPeerServer(server, { path: '/' }));
app.use('/', ExpressPeerServer(server, { path: '/peerjs' }));

server.listen(process.env.PORT || 3000);
