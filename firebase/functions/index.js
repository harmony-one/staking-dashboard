const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

const validators = require("./mock-data/validators");
const proposals = require("./mock-data/proposals");
const govParameters = require("./mock-data/gov.parameters");
const stakingParameters = require("./mock-data/staking.parameters");
const networks = require("./mock-data/networks");
const account = require("./mock-data/account");
const stakingPool = require("./mock-data/staking.pool");
const mintingAnnualProvisions = require("./mock-data/minting.annualprovisions");
const transactionResult = require("./mock-data/transaction.info");
// /Txs
const txBySender = require("./mock-data/txs/bySender");
const txByRecipient = require("./mock-data/txs/byRecipient");
const blocks = require("./mock-data/txs/blocks");

const admin = require("firebase-admin");

admin.initializeApp(functions.config().firebase);

const db = admin.firestore();
console.log("testing");
setInterval(async () => {
  console.log("hello");
}, 100);

const app = express();

app.use(cors());

app.get("/validators", (req, res) => res.json({ validators }));
app.get("/validators/:address", (req, res) => {
  const validator = validators.find(
    item => (item.operator_address = req.params.address)
  );
  res.json(validator);
});
app.get("/proposals", (req, res) => res.json(proposals));
app.get("/networks", (req, res) => res.json(networks));
app.get("/account", (req, res) => res.json(account));

// These endpoints below are used by "cosmos" api
app.get("/auth/accounts/:accountId", (req, res) => res.json(account));
app.get("/staking/pool", (req, res) => res.json(stakingPool));
app.get("/minting/annual-provisions", (req, res) =>
  res.json(mintingAnnualProvisions)
);

// For "/activity" page
app.get("/txs", (req, res) => {
  if (req.query && Object.keys(req.query).length) {
    // by sender
    if (req.query.sender) {
      res.json(txBySender);
      return;
    }
    if (req.query.recipient) {
      res.json(txByRecipient);
      return;
    }
  }
  // console.log("/txs req  query", JSON.stringify(req.query));
  // console.log("/txs req  params", JSON.stringify(req.params));
  res.json([]);
});

// Mocks for https://lcd.nylira.net/blocks/2369584
app.get("/blocks/:blockId", (req, res) => {
  const { blockId } = req.params;
  res.json(blocks[blockId]);
});

// Final step of transaction
app.post("/txs", (req, res) => {
  res.json({
    height: "0",
    txhash: "CD68C99E83A8453E71A67F20DB7BF3057B85BDFA57D24D156C44A968F9D4E5D8"
  });
});

app.get("/txs/:txId", (req, res) => {
  res.json(transactionResult);
});

app.get("/gov/parameters/deposit", (req, res) => {
  res.json(govParameters.deposit);
});

app.get("/gov/parameters/tallying", (req, res) => {
  res.json(govParameters.tallying);
});

app.get("/gov/parameters/voting", (req, res) => {
  res.json(govParameters.voting);
});

app.get("/staking/parameters", (req, res) => {
  res.json(stakingParameters);
});


exports.mocks = functions.https.onRequest(app);
