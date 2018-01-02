var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var OrderOverview=require('../models/OrderOverview');

router.post('/',function (req,res,next) {
    console.log('inside message post');
    OrderOverview.create(req.body,function (err,post) {
       if(err) throw err;

       res.json(post);

    });
});