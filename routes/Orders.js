/**
 *
 * for getting all orders for a particular token pair
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Order = require('../models/Order.js');

/* GET all orders for the given pair */
router.get('/:nonce/:tokena/:tokenb', function(req, res, next) {

    Order.find({
        $or : [
            { $and : [ {"order.tokenGet":req.params.tokena} , {"order.tokenGive":req.params.tokenb}] },
            { $and : [ {"order.tokenGet":req.params.tokenb} , {"order.tokenGive":req.params.tokena}] }
        ]
    },function (err,post) {
        if(err) throw err;
        var result=[];
        /*forEach(x in post)
        {
            result.push()
        }*/
        var item={orders:post,blockNumber:4799466};
        res.json(item);

    })
});

module.exports = router;