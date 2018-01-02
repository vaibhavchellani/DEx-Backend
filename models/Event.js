var mongoose = require('mongoose');

var EventSchema = new mongoose.Schema({
    address:String,
    blockNumber: Number,
    timeStamp: String,
    gasPrice : String,
    gasUsed : String,
    logIndex: Number,
    transactionHash:Number,
    transactionIndex:Number,
    event:String,
    args : {
        token: String ,
        user :String,
        amount :String,
        balance :String,
    },
    txLink : String,

});

module.exports = mongoose.model('Event', EventSchema);