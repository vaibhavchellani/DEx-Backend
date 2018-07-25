/**
 *
 * for getting all orders for a particular token pair
 */
const express = require("express");
const router = express.Router();
const config = require("../config");
const utility = require("../utility");
const Web3 = require("web3");
const web3 = new Web3(new Web3.providers.HttpProvider(config.ethRPC));

var obj = {
  jsonrpc: "2.0",
  id: 1,
  result: {
    blockHash:
      "0xf64a12502afc36db3d29931a2148e5d6ddaa883a2a3c968ca2fb293fa9258c68",
    blockNumber: "0x70839",
    from: "0xc80fb22930b303b55df9b89901889126400add38",
    gas: "0x30d40",
    gasPrice: "0xba43b7400",
    hash: "0x1e2910a262b1008d0616a0beb24c1a491d78771baa54a33e66065e03b1f46bc1",
    input:
      "0xfc36e15b0000000000000000000000000000000000000000000000000000000000000020000000000000000000000000000000000000000000000000000000000000000a4861636b65726e65777300000000000000000000000000000000000000000000",
    nonce: "0xa7",
    to: "0x03fca6077d38dd99d0ce14ba32078bd2cda72d74",
    transactionIndex: "0x0",
    value: "0x0",
    v: "0x1c",
    r: "0xe7ccdba116aa95ae8d9bdd02f619a0cdfc1f60c5740b3899865822a80cd70218",
    s: "0xf200df1921ea988d16280a0873b69cb782a54e8a596d15e700710c820c8d2a9e"
  }
};
/* GET all orders for the given pair */
router.get("/", function(req, res, next) {
  web3.eth.getTransaction(req.query["txhash"], function(err, result) {
    console.log(result);
    (obj["gasPrice"] = result.gasPrice), (obj["gas"] = result.gas);
    console.log("yay");
    console.log(obj);
    res.json(obj);
  });
});

module.exports = router;
