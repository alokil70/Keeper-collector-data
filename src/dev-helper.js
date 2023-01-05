const helper = require('./helper');

exports.emulPrinterSendData = (socket) => {
    function emit(msg, cmd) {
        if (socket.connected) socket.emit(msg, cmd);
    }
    // let time = setInterval(() => execute_request(), 5000);
};
