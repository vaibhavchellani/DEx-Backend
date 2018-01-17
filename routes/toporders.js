/**
 *
 * for getting all orders for a particular token pair
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Order = require('../models/Order.js');

/* GET all orders for the given pair */
router.get('/', function(req, res, next) {
    Order.find(function (err,post) {
        res.json(post);
    })
});

module.exports = router;