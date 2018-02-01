
var express = require('express');
var router = express.Router();
var Event = require('../models/Event.js');
var utility=require('../resources/utility');

var Web3 = require('web3');
/*var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/9c53Bai0EYh4fbE7elEE'));*/
var web3 = new Web3(new Web3.providers.HttpProvider('http://ec2-13-250-15-1.ap-southeast-1.compute.amazonaws.com:8545'));
router.get('/:nonce/:lastblock', function(req, res, next) {
    Event.find(function (err, post) {

        var blockNumber=0;
        utility.getURL('https://ropsten.etherscan.io/api?module=proxy&action=eth_blockNumber&apikey=KF9ADFTHP4WJF1GV3WHJZCTFZIN5XZUXG1',(err,response)=>{
            if(!err) {
                blockNumber=parseInt(JSON.parse(response).result);
                var item={events:post,blockNumber:blockNumber};
                res.json(item);
            }
            else{
                throw  err;
            }
        });
    });
});



module.exports = router;