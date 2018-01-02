var express = require('express');
var router = express.Router();
var mongo= require('mongodb');
var assert= require('assert');

var url='mongodb://localhost:27017/exchange_api'
router.get('/', function(req, res){
    res.send('GET route on return things.');

});
router.post('/', function(req, res){
    //res.send('POST route on return things .');
    var item ={
        title:"hey",
        newTitle:"new title"
    };
    mongo.connect(url,function (err,client) {
       //assert.equals(err,null);
        if (err) throw err;
        var db=client.db('test');
       db.collection('test').insertOne(item,function (err,result) {
           //assert.equals(err,null);
           if (err) throw err;
           console.log("item "+result+"inserted");
           client.close();
           res.send(result);
       });
    });
});

//export this router to use in our index.js
module.exports = router;