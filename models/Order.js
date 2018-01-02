var mongoose = require('mongoose');

var OrderSchema = new mongoose.Schema({
    // to change
    //updated_at: { type: Date, default: Date.now },

    contractAddress: String,
    tokenGet: String,
    amountGet: String,
    tokenGive: String,
    amountGive: String,
    expires: String,
    nonce: String,
    v: String,
    s: String,
    r: String,
    user:String,



});

module.exports = mongoose.model('Order', OrderSchema);