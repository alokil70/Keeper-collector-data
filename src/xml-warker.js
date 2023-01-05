const fs = require('fs');
const path = require('path');
const exec = require('child_process').execFile;
const xml2js = require('xml2js');
const logger = require('./logger');
const config = require('./config');

const parser = new xml2js.Parser();
let starting = true;

exports.requestFile = (cmd) => new Promise((resolve, reject) => {
    const createPath = (cmd) => path.resolve(__dirname, '../xml', `${cmd}`);
    console.log('XML request start');
    logger('XML request start', 'from execute request function');
    exec(createPath(config.RUNMODULE), [config.RUNMODULE_IP, cmd, config.RUNMODULE_PASS ? `/PASS:${config.RUNMODULE_PASS}` : ''], { windowsHide: true }, (err, data) => {
        if (err) {
            console.log('XML request error: ', err);
            logger(err, 'XML request error: ');
            reject(err);
        } else {
            logger(data, 'XML request: ');
            resolve(`Res${cmd}`);
        }
    });
});

exports.parserXML = (cmd) => new Promise((resolve, reject) => {
    const xmlfile = `${__dirname}/../${cmd}`;
    fs.readFile(xmlfile, 'utf-8', (err, text) => {
        if (err) {
            console.log('readFile error:', err);
            logger(err, 'readFile error:');
            reject(err);
        } else {
            parser.parseString(text, (error, result) => {
                if (error) {
                    console.error('parsing error:', error);
                    logger(error, 'parsing error:');
                }
                if (result) {
                    if (starting) {
                        const obj = result.RK7QueryResult.CommandResult[0].SystemInfo[0];
                        const restObj = {
                            RestCode: obj.$.RestCode,
                            CashGroupId: obj.CashGroup[0].$.id,
                            CashGroupCode: obj.CashGroup[0].$.code,
                            CashGroupName: obj.CashGroup[0].$.name,
                            Restaurant: obj.Restaurant[0].$.name,
                        };
                        // restObj.RestCode = result.RK7QueryResult.CommandResult[0].SystemInfo[0].$.RestCode;
                        // restObj.CashGroupId = result.RK7QueryResult.CommandResult[0].SystemInfo[0].CashGroup[0].$.id;
                        // restObj.CashGroupCode = result.RK7QueryResult.CommandResult[0].SystemInfo[0].CashGroup[0].$.code;
                        // restObj.CashGroupName = result.RK7QueryResult.CommandResult[0].SystemInfo[0].CashGroup[0].$.name;
                        // restObj.Restaurant = result.RK7QueryResult.CommandResult[0].SystemInfo[0].Restaurant[0].$.name;
                        starting = false;
                        resolve(restObj);
                        return;
                    }
                    console.log('parsing XML...', 'OK');
                    logger('OK', 'parsing XML...');
                    resolve(result);
                }
            });
        }
    });
});
