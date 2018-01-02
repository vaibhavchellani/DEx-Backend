var mongoose = require('mongoose');
var Order =require('./Order')
var OrderOverviewSchema = new mongoose.Schema({

    amount: String,
    price: String,
    id: String,
    //order:Order,
    updated : { type: Date, default: Date.now },
    submitted :{type:Date},
    availableVolume : String,
    ethAvailableVolume:String,
    availableVolumeBase:String,
    ethAvailableVolumeBase:String,
    amountFilled:String,
});

module.exports = mongoose.model('OrderOverview', OrderOverviewSchema);