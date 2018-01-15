/**
 *
 * for getting all orders for a particular token pair
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Order = require('../models/Order.js');

/* GET all orders for the given pair */
router.get('/{TokenA}/{TokenB}', function(req, res, next) {
    Order.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});

module.exports = router;