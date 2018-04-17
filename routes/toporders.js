/**
 *
 * for getting all orders for a particular token pair
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Order = require('../models/Order.js');
var utility = require('../resources/utility');

/* GET all orders for the given pair */
router.get('/:nonce', function (req, res, next) {
    Order.find(function (err, post) {
        var blockNumber = 0;
        //todo change to api when on mainnet
        utility.getURL('https://ropsten.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=KF9ADFTHP4WJF1GV3WHJZCTFZIN5XZUXG1', (err, response) => {
            if (!err) {
                blockNumber = parseInt(JSON.parse(response).result);
                var item = {orders: post, blockNumber: blockNumber};
                res.json(item);


            }
            else {
                throw err;
            }
        });
    })
});

module.exports = router;