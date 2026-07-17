const express = require('express');
const { ExpressPeerServer } = require('peer');
const app = express();
const server = require('http').createServer(app);

// Чистый CORS без ограничений
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});

// Ровно ОДИН инстанс PeerServer с правильным внутренним путем
const peerServer = ExpressPeerServer(server, {
    path: '/peerjs',
    debug: true
});

// Монтируем в корень, чтобы Express не обрезал пути при веб-сокет апгрейде
app.use('/', peerServer);

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => console.log(`Сервер запущен на порту ${PORT}`));
