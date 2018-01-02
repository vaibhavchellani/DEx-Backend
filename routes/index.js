var express = require('express');
var app = express();

var returnticker = require('./returnticker.js');

//both index.js and router.js should be in same directory
app.use('/returnticker', returnticker);

app.listen(3000);