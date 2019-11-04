const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");

const validators = require("./mock-data/validators");
const proposals = require("./mock-data/proposals");
const networks = require("./mock-data/networks");
const account = require("./mock-data/account");
const stakingPool = require("./mock-data/staking.pool");
const mintingAnnualProvisions = require("./mock-data/minting.annualprovisions");

const app = express();

app.use(cors());

app.get("/validators", (req, res) => res.json(validators));
app.get("/proposals", (req, res) => res.json(proposals));
app.get("/networks", (req, res) => res.json(networks));
app.get("/account", (req, res) => res.json(account));

// These endpoints below are used by "cosmos" api
app.get("/auth/accounts/:accountId", (req, res) => res.json(account));
app.get("/staking/pool", (req, res) => res.json(stakingPool));
app.get("/minting/annual-provisions", (req, res) =>
  res.json(mintingAnnualProvisions)
);
// Final step of transaction
app.post("/txs", (req, res) =>
  res.json({
    height: "0",
    txhash: "CD68C99E83A8453E71A67F20DB7BF3057B85BDFA57D24D156C44A968F9D4E5D8"
  })
);

// TODO Mock tx result
// app.get("/txs/:txId", (req, res) => {
//   res.json({});
// });
app.listen(3000, () => console.log(`Example app listening on port ${3000}!`))
// exports.mocks = functions.https.onRequest(app);
