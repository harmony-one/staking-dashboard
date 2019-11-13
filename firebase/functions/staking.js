const express = require("express");
const cors = require("cors");

const validators = require("./mock-data/validators");
const proposals = require("./mock-data/proposals");
const networks = require("./mock-data/networks");
const account = require("./mock-data/account");

const stakingPool = require("./mock-data/staking.pool");
const mintingAnnualProvisions = require("./mock-data/minting.annualprovisions");
const transactionResult = require("./mock-data/transaction.info");
// /Txs
const txBySender = require("./mock-data/txs/bySender");
const txByRecipient = require("./mock-data/txs/byRecipient");
const blocks = require("./mock-data/txs/blocks");

const app = express();

app.use(cors());

app.get("/validators", (req, res) => res.json(validators));

module.exports = { staking: app };
