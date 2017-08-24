/*jslint node: true */
"use strict";

let constants = require('byteballcore/constants');

exports.port = null;
//exports.myUrl = 'wss://mydomain.com/bb';
exports.bServeAsHub = false;
exports.bLight = false;

exports.storage = 'sqlite';


exports.hub = 'byteball.org/bb-test';
exports.deviceName = 'Exchange';
exports.permanent_pairing_secret = '0000';
exports.control_addresses = ['0PCUXR4CPXYEJ5DJWKUGT3YMOMVHGFH5B', '0JI7626OC65OOKOQNSC3AXE5D223EF54B'];
exports.payout_address = 'WHERE THE MONEY CAN BE SENT TO';

exports.bIgnoreUnpairRequests = true;
exports.bSingleAddress = false;
exports.KEYS_FILENAME = 'keys.json';

//email
exports.useSmtp = false;
exports.admin_email = 'xxjenekxx@gmail.com';
exports.from_email = 'jenekct@mail.ru';

//contract
exports.TIMESTAMPER_ADDRESS = 'OPNUXBRSSQQGHKQNEPD2GLWQYEUY5XLD'; // isTestnet ? 'OPNUXBRSSQQGHKQNEPD2GLWQYEUY5XLD' : 'I2ADHGP4HL6J37NQAD73J7E5SKFIXJOT'
exports.contractTimeout = 4; // hours

//bot
exports.assetToSell = constants.BLACKBYTES_ASSET;
exports.assetToSellMultiple = 1000;
exports.assetToSellName = 'blackbytes';

exports.assetToReceive = 'base';
exports.assetToReceiveName = 'bytes';

exports.exchangeRate = 0.5;


if(exports.assetToSell === 'base') exports.assetToSell = null;
if(exports.assetToReceive === 'base') exports.assetToReceive = null;
if(!exports.assetToSellMultiple || exports.assetToSellMultiple <= 0) exports.assetToSellMultiple = 1;