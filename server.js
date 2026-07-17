const express = require('express');
const { ExpressPeerServer } = require('peer');
const app = express();
const server = require('http').createServer(app);

// CORS для всех
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

const peerServer = ExpressPeerServer(server, {
    path: '/' // PeerJS будет работать в корне /myapp
});

app.use('/myapp', peerServer);

server.listen(process.env.PORT || 3000);
