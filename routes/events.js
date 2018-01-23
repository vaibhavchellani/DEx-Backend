var express = require('express');
var router = express.Router();
var Event = require('../models/Event.js');

var Web3 = require('web3');
/*var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/9c53Bai0EYh4fbE7elEE'));*/
var web3 = new Web3(new Web3.providers.HttpProvider('http://ec2-13-250-15-1.ap-southeast-1.compute.amazonaws.com:8545'));
router.get('/:nonce/:lastblock', function(req, res, next) {
    console.log("isnide evetns");
    Event.find(function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});



module.exports = router;