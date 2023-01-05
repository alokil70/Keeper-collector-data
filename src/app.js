const http = require('http');
const path = require('path');
const exec = require('child_process').execFile;
const axios = require('axios').default;
const fs = require('fs');
const net = require('net');
const xml2js = require('xml2js');
const iconv = require('iconv-lite');
const FtpClient = require('ftp-client/lib/client');
const config = require('./config');
const { requestFile, parserXML } = require('./xml-warker');
const { socketIoInit } = require('./io');
const { emulPrinterSendData } = require('./dev-helper');

const parser = new xml2js.Parser();
const web = require('../web/html');
const logger = require('./logger');
const helper = require('./helper');

const SERVER_CLOUD_ADDRESS = `${config.SERVER_CLOUD_IP}:${config.SERVER_CLOUD_PORT}`;

const ftpConfig = {
    host: '62.217.177.241', // config.SERVER_CLOUD_IP.slice(7),
    port: 21,
    user: 'update',
    password: 'update',
};
const options = {
    logging: 'basic',
};

const client = new FtpClient(ftpConfig, options);

let restObj = {};

let socket;

function emit(msg, cmd) {
    if (socket.connected) socket.emit(msg, cmd);
}

const license = null;
async function lic() {
    await axios.post(`${SERVER_CLOUD_ADDRESS}/api/lic`, {
        license: '12345',
    })
        .then((data) => {
            console.log(data.data);
            logger(data.data, 'Connect to rest server');
        })
        .catch((err) => {
            console.log('Error connect to rest server');
            logger(err, 'Error connect to rest server');
        });
}
lic();

const parseXML = (file) => {
    const xmlfile = `${__dirname}/../${file}`;
    fs.readFile(xmlfile, 'utf-8', (err, text) => {
        if (err) {
            console.log('readFile error:', err);
            logger(err, 'readFile error:');
        } else {
            parser.parseString(text, (error, result) => {
                if (error) {
                    console.error('parsing error:', error);
                    logger(error, 'parsing error:');
                }
                if (result) {
                    console.log('parsing XML...', 'OK');
                    logger('OK', 'parsing XML...');
                    emit('xmlMsg', result);
                }
            });
        }
    });
};

const executeRequest = (cmd) => {
    const createPath = (cmd) => path.resolve(__dirname, '../xml', `${cmd}`);
    logger('XML request start', 'from execute request function');
    exec(createPath(config.RUNMODULE), [config.RUNMODULE_IP, cmd, config.RUNMODULE_PASS ? `/PASS:${config.RUNMODULE_PASS}` : ''], { windowsHide: true }, (err, data) => {
        if (err) {
            console.log('XML request error: ', err);
            logger(err, 'XML request error: ');
        } else {
            logger(data, 'XML request: ');
            parseXML(`Res${cmd}`);
        }
    });
};

const parseCloseDay = (data) => {
    emit('prntMsgEndDay', iconv.decode(data, 'cp1251'));
};

const parseFromBytesToXML = (data) => {
    parser.parseStringPromise(data.toString('utf-8'))
        .then((result) => {
            logger('XML parsing emit', 'OK');
            emit('prntMsgXML', result);
        })
        .catch((err) => {
            logger(err, 'XML parsing from bytes error:');
        });
};

const listener = net.createServer((buf) => {
    buf.on('connection', (msg) => logger(msg, 'connection'));
    let bytes = [];
    buf.on('data', (data) => {
        // logger(data, 'data')
        if (data[data.length - 1] !== 0x0a) {
            if (bytes.length > 0) {
                if (bytes[bytes.length - 1].length === data.length) {
                    console.log('buf equals');
                } else {
                    bytes.push(data);
                }
            } else {
                bytes.push(data);
            }
        } else if (bytes.length >= 1) {
            bytes.push(data);
            const sumOfBytes = Buffer.concat(bytes);
            if (bytes[0][0] === 0x20) {
                parseCloseDay(sumOfBytes);
            } else {
                parseFromBytesToXML(sumOfBytes);
            }
            bytes = [];
        } else {
            if (data[0] === 0x20) {
                parseCloseDay(data);
            } else {
                parseFromBytesToXML(data);
            }
            bytes = [];
        }
        console.log('length of bytes', bytes.length);
    });
    buf.on('error', (err) => {
        logger(err, 'tcp server');
    });
    buf.on('end', (err) => {
        console.log('end');
        logger(err, 'server disconnected');
    });
    buf.on('close', (err) => {
        logger(err, 'server closed');
    });
});

const startApp = () => new Promise((resolve, reject) => {
    if (config.DEVELOPMENT) {
        parserXML(`Res${config.RUNMODULE_STARTREQFILE}`).then((result) => resolve(result));
    } else {
        requestFile(config.RUNMODULE_STARTREQFILE)
            .then((cmd) => {
                console.log('resolve after xml file', cmd);
                parserXML(cmd).then((result) => resolve(result));
            });
    }
});

const startWorker = () => {
    emit('message', 'start');
    if (config.DEVELOPMENT) {
        setInterval(() => parseXML('Restest.xml'), config.REQ_DELAY * 1000);
        if (config.BROADCASTMESSAGES) {
            emulPrinterSendData(socket);
        }
    } else {
        setInterval(() => executeRequest(config.RUNMODULE_REQFILE), config.REQ_DELAY * 1000);
    }
};

startApp().then((result) => {
    restObj = result;
    socketIoInit(result).then((sock) => {
        socket = sock;
        socket.on('connect', () => {
            console.log('Socket connect:', socket.connected);
            logger(socket.connected, 'Socket connect:');
            if (socket.connected) {
                startWorker(socket);
            }
        });
        socket.on('message', (msg) => {
            if (msg === 'ping') {
                emit('message', 'pong');
            }
            if (msg === 'get logs') {
                console.log('get logs');
                client.connect(() => {
                    client.upload(['./log/**'], `logs/${restObj.RestCode}`, {
                        baseDir: './log',
                        overwrite: 'older',
                    }, (res) => {
                        logger(res, 'uploaded');
                        emit('message', 'uploaded');
                        console.log(res);
                    });
                });
            }
            if (msg === 'get update') {
                console.log('get update');
                logger(msg, 'update');
                client.connect(() => {
                    client.download('/', './', {
                        overwrite: 'all',
                    }, (res) => {
                        if (res.downloadedFiles.length) {
                            console.log('res', res);
                            logger(res, 'update downloaded');
                            emit('message', 'update');
                        }
                    });
                });
                setTimeout(() => {
                    const runner = 'update.bat';
                    const createPath = (name) => path.resolve(__dirname, '../', `${name}`);
                    exec(createPath(runner), { windowsHide: true }, (err, data) => {
                        console.log('execute data:', data);
                        if (err) {
                            console.log('update error: ', err);
                            logger(err, 'update error: ');
                        } else {
                            emit('message', restObj);
                            logger(data, 'update request: ');
                        }
                    });
                }, config.UPDATE_TIMEOUT || 200000);
            }
        });
    });
    listener.listen(config.TCP_PORT);
    http.createServer(web.onRequest).listen(config.HTTPSERVER_LOCAL_PORT, () => {
        console.log(`http server working on PORT: ${config.HTTPSERVER_LOCAL_PORT}`);
    });
});
