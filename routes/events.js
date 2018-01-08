var express = require('express');
var router = express.Router();
var Event = require('../models/Event.js');

var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/9c53Bai0EYh4fbE7elEE'));

router.get('/', function(req, res, next) {
    Event.find(function (err, Event) {
        if (err) return next(err);
        res.json(products);
    });
});



module.exports = router;