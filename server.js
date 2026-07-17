const { PeerServer } = require('peer');

const PORT = process.env.PORT || 3000;

const peerServer = PeerServer({
    port: PORT,
    path: '/',
    proxied: true, // Обязательно для правильной работы за прокси Render
    corsOptions: {
        origin: '*'
    }
});

console.log(`Автономный PeerJS сервер запущен на порту ${PORT}`);
