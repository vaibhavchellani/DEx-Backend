var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var OrderOverview = require('../models/OrderOverview.js');

/* GET all top orders */
router.get('/', function(req, res, next) {
    OrderOverview.find(function (err, products) {
        if (err) return next(err);
        res.json(products);
    });
});
router.post('/',function (req,res,next) {

    OrderOverview.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

module.exports = router;