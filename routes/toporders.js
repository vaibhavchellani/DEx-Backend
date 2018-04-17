/**
 *
 * for getting all orders for a particular token pair
 */
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const Order = require('../models/Order.js');
const utility = require('../utility');

/* GET all orders for the given pair */
router.get('/:nonce', function (req, res, next) {
    Order.find(function (err, post) {
        let blockNumber = 0;
        //todo change to api when on mainnet
        utility.getURL('https://ropsten.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=KF9ADFTHP4WJF1GV3WHJZCTFZIN5XZUXG1', (err, response) => {
            if (!err) {
                blockNumber = parseInt(JSON.parse(response).result);
                const item = {orders: post, blockNumber: blockNumber};
                res.json(item);


            } else {
                throw err;
            }
        });
    })
});

module.exports = router;