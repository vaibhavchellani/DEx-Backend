var express = require('express');
var router = express.Router();
var Web3 = require('web3');
var web3 = new Web3(new Web3.providers.HttpProvider('https://mainnet.infura.io/9c53Bai0EYh4fbE7elEE'));
const request = require('request');
const async = require('async');
const BigNumber = require('bignumber.js');
const sha256 = require('js-sha256').sha256;
var decimal=0;
var availableVolumeBase=0;
var ethAvailableVolumeBase=0;
var availableVolume=0;
var ethAvailableVolume=0;
var price=0;
var direction='null';
var amount=0;
router.post('/',function (req,res,next) {
    /*  request.get('http://api.etherscan.io/api?module=contract&action=getabi&address='+req.body.contractAddr,function (err,data) {
        //var contractABI = "";
        //console.log(JSON.parse(data.body).result);
        //var ABI=JSON.parse(data.body).result;
        //console.log(ABI.toArray());
    });*/


    const id = sha256(Math.random().toString());
    const buyOrder = {
        amount: req.body.amountGet,
        price: req.body.amountGive
            .div(req.body.amountGet)
            .mul(getDivisor(req.body.tokenGet))
            .div(getDivisor(req.body.tokenGive)),
        id: `${id}_buy`,
        order: {
            contractAddr: req.body.contractAddr,
            tokenGet: req.body.tokenGet,
            amountGet: req.body.amountGet,
            tokenGive: req.body.tokenGive,
            amountGive: req.body.amountGive,
            expires: req.body.expires,
            nonce: req.body.nonce,
            v: req.body.v,
            s: req.body.s,
            r: req.body.r,
            user: req.body.user,
        },


    };
    const sellOrder = {
        amount: -message.amountGive,
        price: message.amountGet
            .div(message.amountGive)
            .mul(API.getDivisor(message.tokenGive))
            .div(API.getDivisor(message.tokenGet)),
        id: `${id}_sell`,
        order: message,
        updated: undefined,
    };

    if (order.amount >= 0) {
        order.price = new BigNumber(order.order.amountGive)
            .div(new BigNumber(order.order.amountGet))
            .mul(API.getDivisor(order.order.tokenGet))
            .div(API.getDivisor(order.order.tokenGive));
        order.availableVolume = availableVolume;
        order.ethAvailableVolume = this.utility.weiToEth(
            Math.abs(order.availableVolume),
            API.getDivisor(order.order.tokenGet));
        order.availableVolumeBase = Math.abs(availableVolume
            .mul(order.price)
            .mul(API.getDivisor(order.order.tokenGive))
            .div(API.getDivisor(order.order.tokenGet)));
        order.ethAvailableVolumeBase = this.utility.weiToEth(order.availableVolumeBase,
            API.getDivisor(order.order.tokenGive));
    } else {
        order.price = new BigNumber(order.order.amountGet)
            .div(new BigNumber(order.order.amountGive))
            .mul(API.getDivisor(order.order.tokenGive))
            .div(API.getDivisor(order.order.tokenGet));
        order.availableVolume = availableVolume
            .div(order.price)
            .mul(API.getDivisor(order.order.tokenGive))
            .div(API.getDivisor(order.order.tokenGet));
        order.ethAvailableVolume = this.utility.weiToEth(
            Math.abs(order.availableVolume),
            API.getDivisor(order.order.tokenGive));
        order.availableVolumeBase = Math.abs(availableVolume);
        order.ethAvailableVolumeBase = this.utility.weiToEth(
            order.availableVol umeBase,
            API.getDivisor(order.order.tokenGet));
    }


    /*if(req.body.tokenGet=='0x0000000000000000000000000000000000000000' && req   .body.tokenGive!='0x0000000000000000000000000000000000000000')
    {
        direction='sell';
        amount = -req.body.amountGive;
        availableVolumeBase=parseInt(req.body.amountGet);
        ethAvailableVolumeBase=availableVolumeBase*Math.pow(10,-parseInt(decimal.toPrecision()));
        availableVolume=parseInt(req.body.amountGive);
        ethAvailableVolume = availableVolume*Math.pow(10,-18);
        price =ethAvailableVolumeBase/ethAvailableVolume;
    }
    else if(req.body.tokenGet!='0x0000000000000000000000000000000000000000' && req.body.tokenGive=='0x0000000000000000000000000000000000000000'){
        direction='buy';
        amount = req.body.amountGet;
        availableVolumeBase=parseInt(req.body.amountGet);
        ethAvailableVolumeBase=availableVolumeBase*Math.pow(10,-18);
        availableVolume=parseInt(req.body.amountGive);
        ethAvailableVolume=availableVolume*Math.pow(10,-parseInt(decimal.toPrecision()));
        price = ethAvailableVolumeBase/ethAvailableVolume;
    }
    else
    {
        direction='null';
    }

    var s={
        amount:amount,
        price:price,
        availableVolumeBase:availableVolumeBase,
        ethAvailableVolumeBase:ethAvailableVolumeBase,
        availableVolume:availableVolume,
        ethAvailableVolume:ethAvailableVolume
    };
    console.log(s);*/
    var item = {
        amount: "12",
        price: "12",
        order: {
            contractAddr: req.body.contractAddr,
            tokenGet: req.body.tokenGet,
            amountGet: req.body.amountGet,
            tokenGive: req.body.tokenGive,
            amountGive: req.body.amountGive,
            expires: req.body.expires,
            nonce: req.body.nonce,
            v: req.body.v,
            s: req.body.s,
            r: req.body.r,
            user: req.body.user,
        },
        id: "sdsdsd_sell",

        availableVolume: "1",
        ethAvailableVolume: "4",
        availableVolumeBase: "1212",
        ethAvailableVolumeBase: "12",
        amountFilled: "0",
    };


    var Order=require('../models/Order');
        Order.create(item,function (err,post) {
           if(err) throw err;
           res.json(post);

        });

});

function getDivisor(tokenOrAddress) {
    var ABI=[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"totalSupply","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}];

    if (ABI!=null){
        var MyContract = web3.eth.contract(ABI);
        if(req.body.tokenGet!='0x0000000000000000000000000000000000000000')
            var myContractInstance = MyContract.at(req.body.tokenGet.toString());
        else if(req.body.tokenGive!='0x0000000000000000000000000000000000000000')
            var myContractInstance = MyContract.at(req.body.tokenGive.toString());
        else
            throw "invalid address pair";
        decimal = myContractInstance.decimals();

        console.log(parseInt(decimal.toPrecision()) + typeof parseInt(decimal.toPrecision()));

    } else {
        console.log("Error" );
    }


    var result = 1000000000000000000;

    result = Math.pow(10, parseInt(decimal.toPrecision())); // eslint-disable-line no-restricted-properties

    return new BigNumber(result);
};
function getOrderParams(orderIn,availableVolume) {
    var order=orderIn;
    if (order.amount >= 0) {
        order.price = new BigNumber(order.order.amountGive)
            .div(new BigNumber(order.order.amountGet))
            .mul(getDivisor(order.order.tokenGet))
            .div(getDivisor(order.order.tokenGive));
        order.availableVolume = availableVolume;
        order.ethAvailableVolume = weiToEth(
            Math.abs(order.availableVolume),
            getDivisor(order.order.tokenGet));
        order.availableVolumeBase = Math.abs(availableVolume
            .mul(order.price)
            .mul(API.getDivisor(order.order.tokenGive))
            .div(API.getDivisor(order.order.tokenGet)));
        order.ethAvailableVolumeBase = this.utility.weiToEth(order.availableVolumeBase,
            getDivisor(order.order.tokenGive));
    } else {
        order.price = new BigNumber(order.order.amountGet)
            .div(new BigNumber(order.order.amountGive))
            .mul(API.getDivisor(order.order.tokenGive))
            .div(API.getDivisor(order.order.tokenGet));
        order.availableVolume = availableVolume
            .div(order.price)
            .mul(API.getDivisor(order.order.tokenGive))
            .div(API.getDivisor(order.order.tokenGet));
        order.ethAvailableVolume = this.utility.weiToEth(
            Math.abs(order.availableVolume),
            API.getDivisor(order.order.tokenGive));
        order.availableVolumeBase = Math.abs(availableVolume);
        order.ethAvailableVolumeBase = this.utility.weiToEth(
            order.availableVol umeBase,
            API.getDivisor(order.order.tokenGet));
    }
    return order;

}
function getAvailableVolume()
{

}
function weiToEth(wei, divisorIn) {
    const divisor = !divisorIn ? 1000000000000000000 : divisorIn;
    return (wei / divisor).toFixed(3);
};

module.exports=router;