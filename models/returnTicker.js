var mongoose = require('mongoose');

var ReturnTickerSchema = new mongoose.Schema({
    last:Number,
    percentChange:Number,
    baseVolume:Number,
    quoteVolume :Number,

});

module.exports = mongoose.model('ReturnTicker', ReturnTickerSchema);