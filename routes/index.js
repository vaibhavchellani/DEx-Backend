var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser')
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/exchange_api')
    .then(() =>  console.log('connection succesful'))
    .catch((err) => console.error(err));

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//test route
var products = require('./products');
app.use('/products', products);
// get only route returns ticker
var returnticker = require('./returnticker.js');
app.use('/returnticker', returnticker);

// This route is get only , returns all pending orders
var order_overview=require('./Orders.js');
app.use('/toporders',order_overview);direction=null;

// This is post only route
var message =require('./message.js');
app.use('/message',message);

// we need an events route

app.listen(6000);