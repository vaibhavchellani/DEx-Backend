const express = require('express');
const router = express.Router();
const Event = require('../models/Event.js');
const utility = require('../resources/utility');

const Web3 = require('web3');
/*var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/9c53Bai0EYh4fbE7elEE'));*/
const web3 = new Web3(new Web3.providers.HttpProvider('https://testgeth.karachainfoundation.org'));
router.get('/:nonce/:lastblock', function (req, res, next) {
    Event.find(function (err, post) {

        let blockNumber = 0;
        utility.getURL('https://ropsten.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=KF9ADFTHP4WJF1GV3WHJZCTFZIN5XZUXG1', (err, response) => {
            if (!err) {
                blockNumber = parseInt(JSON.parse(response).result);
                const item = {events: post, blockNumber: blockNumber};
                res.json(item);
            }
            else {
                throw  err;
            }
        });
    });
});

module.exports = router;