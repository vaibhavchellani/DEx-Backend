const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const Web3 = require("web3");
const Event = require("./models/Event.js");
const utility = require("./utility");
const Order = require("./models/Order.js");
const config = require("./config");
const BigNumber = require("bignumber.js");

const web3 = new Web3(new Web3.providers.HttpProvider(config.ethRPC));

app.use(cors());
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

mongoose.Promise = global.Promise;

//configure morgan to log every api call on server
// app.use(
//   morgan(
//     ":method :url :status :res[content-length] - :response-time ms :date[clf]"
//   )
// );

const exchangeContractAbi = web3.eth.contract(config.dExContractABI);
const exchangeContract = exchangeContractAbi.at(
  config.contractDExAddrs[0].addr
);

//Mongoose Setup
// =============================================================================
// Connect To Database
mongoose
  .connect(config.dbPath)
  .then(() => {
    console.log("xxxxxxx");
  })
  .catch(err => {
    console.log("Database error: " + err);
    mongoose.connect(config.dbPath);
  });

// On Connection
mongoose.connection.on("connected", () => {
  console.log("Database connected at " + config.dbPath);
});

// On Error
mongoose.connection.on("error", err => {
  console.log("Database error: " + err);
});

const Order_event = exchangeContract.Order();
const Deposit_event = exchangeContract.Deposit();
const Withdraw_event = exchangeContract.Withdraw();
const Cancel_event = exchangeContract.Cancel();
const Trade_event = exchangeContract.Trade();
Deposit_event.watch(function(err, res) {
  if (!err) {
    makeItem(res);
    console.log(
      "inside if of deposit watch with result like this " + JSON.stringify(res)
    );
  } else {
    console.log("inside else of deposit event with err like this " + err);
  }
});
Withdraw_event.watch(function(err, result) {
  if (!err) {
    makeItem(result);
    console.log(
      "inside if of withdraw watch with result like this " +
        JSON.stringify(result)
    );
  } else {
    console.log("inside else of withdraw event with err like this " + err);
  }
});
Cancel_event.watch(function(err, result) {
  if (!err) {
    makeItem(result);
    console.log(
      "inside if of cancel watch with result like this " +
        JSON.stringify(result)
    );
  } else {
    console.log("inside else of cancel event with err like this " + err);
  }
});

Trade_event.watch(function(err, result) {
  if (!err) {
    makeItem(result);
    console.log("yay ! trade happened");
    console.log(
      "inside if of trade watch with result like this " + JSON.stringify(result)
    );
  } else {
    console.log("inside else of trade event with err like this " + err);
  }
});
Order_event.watch(function(err, result) {
  if (!err) {
    makeItem(result);
    console.log("order came with this ");
    console.log(result);
    console.log(
      "inside if of order watch with result like this " + JSON.stringify(result)
    );
  } else {
    console.log("inside else of order event with err like this " + err);
  }
});

// we need an events route
function makeItem(res) {
  let item = {};
  utility.getURL(
    config.proxyAPI +
      "/api?module=proxy&action=eth_getTransactionByHash&txhash=" +
      res.transactionHash +
      "&apikey=KF9ADFTHP4WJF1GV3WHJZCTFZIN5XZUXG1",
    (err, response) => {
      if (!err) {
        const responseFromURL = JSON.parse(response);
        console.log(responseFromURL.result);
        item = {
          address: res.address,
          blockNumber: res.blockNumber,
          timeStamp: Date.now().toString(16),
          gasPrice: responseFromURL.result.gasPrice,
          gasUsed: responseFromURL.result.gas,
          logIndex: res.logIndex,
          transactionHash: res.transactionHash,
          transactionIndex: res.transactionIndex,
          event: res.event,
          args: res.args,
          txLink: config.etherscanUrl + "/tx/" + res.transactionHash
        };
        if (item.event === "Trade") {
          const query = {
            $and: [
              { "order.tokenGet": item.args.tokenGet },
              { "order.tokenGive": item.args.tokenGive },
              { "order.amountGet": item.args.amountGet },
              { "order.amountGive": item.args.amountGive }
            ]
          };
          // in args we have tokenGet , tokenGive ,amount GEt , amount give   (get address , give address are of no use to us )
          Order.update(
            query,
            { $set: { amountFilled: "true" } },
            { multi: true },
            function(err, post) {
              if (err) throw err;
              console.log("this is post from makeItem" + post);
            }
          );
        }

        if (item.event === "Order") {
          console.log("order aaya paaji");
          console.log("type is ");
          console.log(typeof item.args.amountGet);
          console.log(typeof Number(item.args.amountGet));
          data = {
            contractAddr: config.contractDExAddrs[0].addr,
            tokenGet: item.args.tokenGet,
            amountGet: Number(item.args.amountGet),
            tokenGive: item.args.tokenGive,
            amountGive: Number(item.args.amountGive),
            expires: Number(item.args.expires),
            nonce: Number(item.args.nonce),
            v: 0,
            r:
              "0x5f99b29734b0cb37f322df69ae14deff6971940e9b34a45724f7a5979d735b87",
            s:
              "0x356d54416376de440e3e6fb5015940695a7aa1a76b70ff4104df565f3b1a46d4",
            user: item.args.user
          };
          console.log("data ban gya paaji " + JSON.stringify(data));

          utility.postURL(
            config.proxyAPI + "/message",
            { message: data },
            function(error, reply) {
              if (!error) {
                console.log("sab changa paaji");
                console.log(reply);
              } else {
                console.log("paaji fuck ho gya !");
                console.log(error);
              }
            }
          );
        }
        console.log(
          "from make Item the item formed is " + JSON.stringify(item)
        );
        Event.create(item, function(err, post) {
          if (err) throw err;
          console.log(" event posted " + post);
        });
      }
    }
  );
}

// ROUTES FOR OUR API
// =============================================================================
// create our router
const router = express.Router();

// middleware to use for all requests
router.use((req, res, next) => {
  // do logging
  next();
});

// import our routers
// ----------------------------------------------------
router.use("/products", require("./routes/products"));
// get only route returns ticker
router.use("/returnticker", require("./routes/returnticker"));
// This route is get only , returns all pending orders
router.use("/orders", require("./routes/Orders"));
// this route is get only
router.use("/events", require("./routes/events"));
// This is post only route
router.use("/message", require("./routes/message"));
router.use("/toporders", require("./routes/toporders"));

router.use("/api", require("./routes/proxy"));

// register our routers
// -------------------------------
app.use("/", router);

// START THE SERVER
// =============================================================================
app.listen(process.env.PORT || config.port, err => {
  if (err) console.log(err);
  console.log("Server running at port:" + config.port);
});
