/**
 * will give out ticker ( volume info )
 * only get route to be present
 * sample out put
 *
 *
 *ETH_ERC20{
       last	0.0000025
       percentChange	0
        baseVolume	0.095
        quoteVolume	37400
    }
 * @params no params
 * @type {e | (() => Express) | * | createApplication}
 */
var express = require('express');
var router = express.Router();
var mongo= require('mongodb');



//export this router to use in our index.js
module.exports = router;