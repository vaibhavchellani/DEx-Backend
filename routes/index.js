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

var products = require('./products');
app.use('/products', products);

var returnticker = require('./returnticker.js');
app.use('/returnticker', returnticker);

var order_overview=require('./orderOverviews.js');
app.use('/toporders',order_overview);

var message =require('./messgage.js')
app.use('/message',message);

app.listen(3000);