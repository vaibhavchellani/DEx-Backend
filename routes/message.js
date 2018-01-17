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
var direction='none';
var amount=0;
var config = require('../resources/config.js');
var ABI=[{"constant":true,"inputs":[],"name":"name","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_spender","type":"address"},{"name":"_amount","type":"uint256"}],"name":"approve","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"totalSupply","outputs":[{"name":"totalSupply","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_from","type":"address"},{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transferFrom","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[],"name":"decimals","outputs":[{"name":"","type":"uint8"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"name":"balance","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":true,"inputs":[],"name":"symbol","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_to","type":"address"},{"name":"_amount","type":"uint256"}],"name":"transfer","outputs":[{"name":"success","type":"bool"}],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant":true,"inputs":[{"name":"_owner","type":"address"},{"name":"_spender","type":"address"}],"name":"allowance","outputs":[{"name":"remaining","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutability":"nonpayable","type":"constructor"},{"payable":false,"stateMutability":"nonpayable","type":"fallback"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_from","type":"address"},{"indexed":true,"name":"_to","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"name":"_owner","type":"address"},{"indexed":true,"name":"_spender","type":"address"},{"indexed":false,"name":"_value","type":"uint256"}],"name":"Approval","type":"event"}];
var utility=require('../resources/utility');
router.post('/',function (req,res,next) {
    /*  request.get('http://api.etherscan.io/api?module=contract&action=getabi&address='+req.body.contractAddr,function (err,data) {
        //var contractABI = "";
        //console.log(JSON.parse(data.body).result);
        //var ABI=JSON.parse(data.body).result;
        //console.log(ABI.toArray());
    });*/
    formOrder(req,res);

});

function getDivisor(tokenOrAddress) {
    /*if (ABI!=null){
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
    }*/
    let result = 1000000000000000000;
    const token =getToken(tokenOrAddress);
    if (token && token.decimals >= 0) {
        result = Math.pow(10, token.decimals); // eslint-disable-line no-restricted-properties
    }
    return new BigNumber(result);
}
function formOrder(req,res){
    if(req.body.tokenGet=='0x0000000000000000000000000000000000000000' && req.body.tokenGive!='0x0000000000000000000000000000000000000000') {
        direction = 'sell';
    }
    else if(req.body.tokenGet!='0x0000000000000000000000000000000000000000' && req.body.tokenGive=='0x0000000000000000000000000000000000000000'){
        direction='buy';
    }
    console.log('direction determined to be '+direction);
    const id = sha256(Math.random().toString());
    const buyOrder = {
        amount: req.body.amountGet,
        price: new BigNumber(req.body.amountGive)
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
        amount: -req.body.amountGive,
        price: new BigNumber(req.body.amountGet)
            .div(req.body.amountGive)
            .mul(getDivisor(req.body.tokenGive))
            .div(getDivisor(req.body.tokenGet)),
        id: `${id}_sell`,
        order:{
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
        } ,

    };
    var newOrder={};
    newOrder=getOrderParams(buyOrder,100);
    var Order=require('../models/Order');
/*
    console.log('Buy order sent from FormOrder');
*/
    Order.create(newOrder,function (err,post) {
        if(err) throw err;
        console.log("buy order sent is "+post)
    });
    newOrder=getOrderParams(sellOrder,100);
/*
    console.log('Sell order sent from FormOrder');
*/
    Order.create(newOrder,function (err,post) {
        if(err) throw err;
        console.log("sell order sent is "+post);

    });

    res.json("success");


}
function getOrderParams(orderIn,availableVolume) {
    var order=orderIn;
    availableVolume=new BigNumber(order.order.amountGet);

/*
    console.log('inside getOrderParams with input order as'+order);
*/
    if (order.amount >= 0) {

/*
        console.log('inside if of getOrderParams');
*/
        order.price = new BigNumber(order.order.amountGive)
            .div(new BigNumber(order.order.amountGet))
            .mul(getDivisor(order.order.tokenGet))
            .div(getDivisor(order.order.tokenGive));
        // difference
        order.availableVolume = availableVolume;
        order.ethAvailableVolume = weiToEth(
            Math.abs(order.availableVolume),
            getDivisor(order.order.tokenGet));
        //difference
        order.availableVolumeBase = Math.abs(availableVolume
            .mul(order.price)
            .mul(getDivisor(order.order.tokenGive))
            .div(getDivisor(order.order.tokenGet)));
        order.ethAvailableVolumeBase = utility.weiToEth(order.availableVolumeBase,
            getDivisor(order.order.tokenGive));
    }
    else {

/*
        console.log('inside else of getOrderParams');
*/
        order.price = new BigNumber(order.order.amountGet)
            .div(new BigNumber(order.order.amountGive))
            .mul(getDivisor(order.order.tokenGive))
            .div(getDivisor(order.order.tokenGet));
        //difference
        order.availableVolume = availableVolume
            .div(order.price)
            .mul(getDivisor(order.order.tokenGive))
            .div(getDivisor(order.order.tokenGet));
        //order.availableVolume=availableVolume;
        order.ethAvailableVolume = utility.weiToEth(
            Math.abs(order.availableVolume),
            getDivisor(order.order.tokenGive));
        //difference
        order.availableVolumeBase = Math.abs(availableVolume);
        order.ethAvailableVolumeBase = utility.weiToEth(
            order.availableVolumeBase,
            getDivisor(order.order.tokenGet));
    }
    return order;

}
function getAvailableVolume()
{
    

}
function weiToEth(wei, divisorIn) {
    const divisor = !divisorIn ? 1000000000000000000 : divisorIn;
    return (wei / divisor).toFixed(3);
}
function getToken(token_address){
    let result;

    const matchingTokens = config.tokens.filter(
        x => x.addr === token_address);
    const expectedKeys = JSON.stringify([
        'addr',
        'decimals',
        'name',
    ]);
    //matchingTokens++;
    //console.log('matching tokens'+matchingTokens);
    //console.log('matching token found '+matchingTokens[0]+' '+matchingTokens.length+' '+matchingTokens);
    if (matchingTokens.length > 0) {
        result = matchingTokens[0];
    } else if (token_address.addr && JSON.stringify(Object.keys(token_address).sort()) === expectedKeys) {
        result = token_address;
    }
    return result;
}

module.exports=router;
