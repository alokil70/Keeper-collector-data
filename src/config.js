module.exports = {
    DEVELOPMENT: false,
    REQ_DELAY: 350,
    // SERVER_CLOUD_IP: 'http://localhost',
    SERVER_CLOUD_IP: 'http://62.217.177.241',
    RUNMODULE: 'req.exe', // XML модуль для связи с RK
    RUNMODULE_PASS: '',
    RUNMODULE_IP: '127.0.0.1:2233', // IP адрес кассового сервера
    RUNMODULE_REQFILE: 'test.xml', // файл с XML запросами
    RUNMODULE_STARTREQFILE: 'start.xml', // файл с XML запросами
    BROADCASTMESSAGES: true, // рассылка тестовых сообщений с принтера
    SERVER_CLOUD_PORT: 7789,
    HTTPSERVER_LOCAL_PORT: 8000,
    TCP_PORT: 8421,
    UPDATE_TIMEOUT: 200000,
};
