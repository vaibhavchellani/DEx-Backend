var express = require('express');
var app = express();
var mongoose = require('mongoose');
var cors = require('cors');
var bodyParser = require('body-parser');
var Web3 = require('web3');

/*var web3 = new Web3(new Web3.providers.HttpProvider('https://ropsten.infura.io/9c53Bai0EYh4fbE7elEE'));*/
//this is ropsten address
var web3 = new Web3(new Web3.providers.HttpProvider('http://ec2-13-250-15-1.ap-southeast-1.compute.amazonaws.com:8545'));

var exchange_contract_abi=web3.eth.contract(
    [{"constant":false,"inputs":[{"name":"tokenGet","type":"address"},{"name":"amountGet","type":"uint256"},{"name":"tokenGive","type":"address"}
        ,{"name":"amountGive","type":"uint256"},{"name":"expires","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"user","type":"address"}
        ,{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"},{"name":"amount","type":"uint256"}],"name":"trade","outputs":[],"payable":false,"type":"function"},
        {"constant":false,"inputs":[{"name":"tokenGet","type":"address"},{"name":"amountGet","type":"uint256"},{"name":"tokenGive","type":"address"},
            {"name":"amountGive","type":"uint256"},{"name":"expires","type":"uint256"},{"name":"nonce","type":"uint256"}],"name":"order","outputs":[],"payable":false,"type":"function"},
        {"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"bytes32"}],"name":"orderFills","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"tokenGet","type":"address"},{"name":"amountGet","type":"uint256"},{"name":"tokenGive","type":"address"},{"name":"amountGive","type":"uint256"},{"name":"expires","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"cancelOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"amount","type":"uint256"}],"name":"withdraw","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"amount","type":"uint256"}],"name":"depositToken","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"tokenGet","type":"address"},{"name":"amountGet","type":"uint256"},{"name":"tokenGive","type":"address"},{"name":"amountGive","type":"uint256"},{"name":"expires","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"user","type":"address"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"amountFilled","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"address"}],"name":"tokens","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"feeMake_","type":"uint256"}],"name":"changeFeeMake","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"feeMake","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"feeRebate_","type":"uint256"}],"name":"changeFeeRebate","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"feeAccount","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"tokenGet","type":"address"},{"name":"amountGet","type":"uint256"},{"name":"tokenGive","type":"address"},{"name":"amountGive","type":"uint256"},{"name":"expires","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"user","type":"address"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"},{"name":"amount","type":"uint256"},{"name":"sender","type":"address"}],"name":"testTrade","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"feeAccount_","type":"address"}],"name":"changeFeeAccount","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"feeRebate","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"feeTake_","type":"uint256"}],"name":"changeFeeTake","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"admin_","type":"address"}],"name":"changeAdmin","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"token","type":"address"},{"name":"amount","type":"uint256"}],"name":"withdrawToken","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"address"},{"name":"","type":"bytes32"}],"name":"orders","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"feeTake","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"deposit","outputs":[],"payable":true,"type":"function"},{"constant":false,"inputs":[{"name":"accountLevelsAddr_","type":"address"}],"name":"changeAccountLevelsAddr","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"accountLevelsAddr","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"token","type":"address"},{"name":"user","type":"address"}],"name":"balanceOf","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"admin","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"tokenGet","type":"address"},{"name":"amountGet","type":"uint256"},{"name":"tokenGive","type":"address"},{"name":"amountGive","type":"uint256"},{"name":"expires","type":"uint256"},{"name":"nonce","type":"uint256"},{"name":"user","type":"address"},{"name":"v","type":"uint8"},{"name":"r","type":"bytes32"},{"name":"s","type":"bytes32"}],"name":"availableVolume","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"inputs":[{"name":"admin_","type":"address"},{"name":"feeAccount_","type":"address"},{"name":"accountLevelsAddr_","type":"address"},{"name":"feeMake_","type":"uint256"},{"name":"feeTake_","type":"uint256"},{"name":"feeRebate_","type":"uint256"}],"payable":false,"type":"constructor"},{"payable":false,"type":"fallback"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenGet","type":"address"},{"indexed":false,"name":"amountGet","type":"uint256"},{"indexed":false,"name":"tokenGive","type":"address"},{"indexed":false,"name":"amountGive","type":"uint256"},{"indexed":false,"name":"expires","type":"uint256"},{"indexed":false,"name":"nonce","type":"uint256"},{"indexed":false,"name":"user","type":"address"}],"name":"Order","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenGet","type":"address"},{"indexed":false,"name":"amountGet","type":"uint256"},{"indexed":false,"name":"tokenGive","type":"address"},{"indexed":false,"name":"amountGive","type":"uint256"},{"indexed":false,"name":"expires","type":"uint256"},{"indexed":false,"name":"nonce","type":"uint256"},{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"v","type":"uint8"},{"indexed":false,"name":"r","type":"bytes32"},{"indexed":false,"name":"s","type":"bytes32"}],"name":"Cancel","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"tokenGet","type":"address"},{"indexed":false,"name":"amountGet","type":"uint256"},{"indexed":false,"name":"tokenGive","type":"address"},{"indexed":false,"name":"amountGive","type":"uint256"},{"indexed":false,"name":"get","type":"address"},{"indexed":false,"name":"give","type":"address"}],"name":"Trade","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"token","type":"address"},{"indexed":false,"name":"user","type":"address"},{"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"balance","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"name":"token","type":"address"},{"indexed":false,"name":"user","type":"address"},
        {"indexed":false,"name":"amount","type":"uint256"},{"indexed":false,"name":"balance","type":"uint256"}],"name":"Withdraw","type":"event"}]
);

mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/exchange_api')
    .then(() =>  console.log('connection succesful'))
    .catch((err) => console.error(err));

var Event=require('../models/Event.js');


app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

var exchange_contract=exchange_contract_abi.at('0x228344536a03c0910fb8be9c2755c1a0ba6f89e1');
var Order_event=exchange_contract.Order();
var Deposit_event=exchange_contract.Deposit();
var Withdraw_event=exchange_contract.Withdraw();
var Cancel_event=exchange_contract.Cancel();
var Trade_event=exchange_contract.Trade();
console.log(exchange_contract.feeMake.call());
Deposit_event.watch(function (err, result) {
    if(!err)
    {
        var item={
            address:result.address,
            blockNumber:result.blockNumber,
            timeStamp: "to be inserted",
            gasPrice : "to be inserted",
            gasUsed : "to be inserted",
            logIndex: result.logIndex,
            transactionHash:result.transactionHash,
            transactionIndex:result.transactionIndex,
            event:result.event,
            args : {
                token: result.args.token ,
                user :result.args.user,
                amount :result.args.amount,
                balance :result.args.balance,
            },
            txLink : result.transactionIndex,
        };

         Event.create(item,function (err, post) {
             if(err) throw err;
             console.log("deposit event posted "+post);
         });
        console.log('inside if of deposit watch with result like this '+JSON.stringify(result));

    }
    else
    {
        console.log('inside else of deposit event with err like this '+err);
    }
});
Withdraw_event.watch(function (err, result) {
    if(!err)
    {
        console.log('inside if of withdraw watch with result like this '+JSON.stringify(result));
    }
    else
    {
        console.log('inside else of withdraw event with err like this '+err);
    }
});
Cancel_event.watch(function (err, result) {
    if(!err)
    {
        console.log('inside if of cancel watch with result like this '+JSON.stringify(result));
    }
    else
    {
        console.log('inside else of cancel event with err like this '+err);
    }
});
Trade_event.watch(function (err, result) {
    if(!err)
    {
        console.log('inside if of trade watch with result like this '+JSON.stringify(result));
    }
    else
    {
        console.log('inside else of trade event with err like this '+err);
    }
});
Order_event.watch(function (err, result) {
    if(!err)
    {
        console.log('inside if of order watch with result like this '+JSON.stringify(result));
    }
    else
    {
        console.log('inside else of order event with err like this '+err);
    }
});


//test route
var products = require('./products');
app.use('/products', products);
// get only route returns ticker
var returnticker = require('./returnticker.js');
app.use('/returnticker', returnticker);

// This route is get only , returns all pending orders
var order=require('./Orders.js');
app.use('/orders',order);

// This is post only route
var message =require('./message.js');
app.use('/message',message);

var toporder=require('./toporders.js');
app.use('/toporders',toporder);
// we need an events route

app.listen(9000);