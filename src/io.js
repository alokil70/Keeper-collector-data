const { io } = require('socket.io-client');
const config = require('./config');

const SERVER_CLOUD_ADDRESS = `${config.SERVER_CLOUD_IP}:${config.SERVER_CLOUD_PORT}`;

exports.socketIoInit = (query) => new Promise((resolve, reject) => {
    const socket = io(SERVER_CLOUD_ADDRESS, {
        reconnect: true,
        query: {
            ...query,
            auth: 'supermax',
        },
    });
    resolve(socket);
});
