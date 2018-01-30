/**
 *
 * for getting all orders for a particular token pair
 */
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Order = require('../models/Order.js');
var utility=require('../resources/utility');
/* GET all orders for the given pair */
router.get('/:nonce/:tokena/:tokenb', function(req, res, next) {
    var query={
        $and : [{
            $or : [
                    { $and : [ {"order.tokenGet":req.params.tokena} , {"order.tokenGive":req.params.tokenb}] },
                    { $and : [ {"order.tokenGet":req.params.tokenb} , {"order.tokenGive":req.params.tokena}] }
                ]
            },
            {
                "amountFilled": { $ne: "true"}
            }]
    };
    Order.find(query,function (err,post) {
        if(err) throw err;
        console.log(post);
        var result=[];
        /*forEach(x in post)
        {
            result.push()
        }*/
        //todo not sure which block number to send from here , sending current blockNumber
        //todo change to api for mainnet
        var blockNumber=0;
        utility.getURL('https://ropsten.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=KF9ADFTHP4WJF1GV3WHJZCTFZIN5XZUXG1',(err,response)=>{
            if(!err) {
                blockNumber=JSON.parse(response).result;
            }
            else{

            }
        });
        var item={orders:post,blockNumber:blockNumber};
        res.json(item);

    })
});

module.exports = router;