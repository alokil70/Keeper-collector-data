// const fs = require('fs');
const bunyan = require('bunyan');

const log = bunyan.createLogger({
    name: 'collector',
    streams: [{
        type: 'rotating-file',
        path: './log/collector-specific.info.log',
        period: '1d',
        count: 10,
    }],
});

// const logFile = `${__dirname}/../log/${new Date().toLocaleDateString('ru-RU')}_error.log`;

module.exports = function (data, msg) {
    // let str = '';
    // const separator = '-------------------------END------\n';
    // if (typeof data === 'object') {
    //     str += JSON.stringify(data);
    //     const stream = `${new Date().toLocaleString('ru-RU')}   >>>   ${msg}   >>>   \n${str}\n${separator}`;
    //     fs.appendFile(logFile, stream, (err) => {
    //         // console.log('appendFile:', err)
    //     });
    //     return;
    // }
    // const stream = `${new Date().toLocaleString('ru-RU')}   >>>   ${msg}   >>>   \n${data}\n${separator}`;
    // fs.appendFile(logFile, stream, (err) => {
    //     // console.log('appendFile:', err)
    // });
    log.info(msg, data);
};
