"use strict";

// [START app]
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

setInterval(() => {
//  console.log("hello");
  // pull data from blockchain into database
}, 1000);

app.get("/", (req, res) => {
  res.send("Hello from App Engine!");
});




// Init admin

const admin = require("firebase-admin");
var serviceAccount = require("./keys/staking_explorer.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://staking-explorer.firebaseio.com"
});

const db = admin.firestore();

// Get data from database

app.get("/validators", async (req, res, next) => {
  const snapshot = await db.collection('validators').get();
  const data = snapshot.docs.map(doc => doc.data());

  if(!data) {
    next({status: 400, message: 'Not found'});
  }

  res.json({ validators: data });
});

app.get("/validators/:address", async (req, res, next) => {
  const snapshot = await db.collection('validators').get();
  const data = snapshot.docs.map(doc => doc.data());

  const validator = data.find(
      item => (item.operator_address === req.params.address)
  );

  if(!validator) {
    next({status: 400, message: 'Not found'});
  }

  res.json(validator);
});

app.get("/proposals", async (req, res, next) => {
  const snapshot = await db.collection('proposals').get();
  const data = snapshot.docs.map(doc => doc.data());

  if(!data) {
    next({status: 400, message: 'Not found'});
  }

  res.json(data);
});

app.get("/networks", async (req, res, next) => {
  const snapshot = await db.collection('networks').get();
  const data = snapshot.docs.map(doc => doc.data());

  if(!data) {
    next({status: 400, message: 'Not found'});
  }

  res.json(data);
});

app.get("/auth/accounts/:accountId", async (req, res, next) => {
  const snapshot = await db.collection('accounts').get();
  const data = snapshot.docs.map(doc => doc.data());

  const account = data.find(
      item => (item.value.address === req.params.accountId)
  );

  if(!account) {
    next({status: 400, message: 'Not found'});
  }

  res.json(account);
});

app.get("/staking/parameters", async (req, res, next) => {
  const snapshot = await db.collection('staking.parameters').get();
  const data = snapshot.docs[0].data();

  if(!data) {
    next({status: 400, message: 'Not found'});
  }

  res.json(data);
});

app.get("/account", async (req, res, next) => {
  const snapshot = await db.collection('accounts').get();
  const data = snapshot.docs[0].data();

  if(!data) {
    next({status: 400, message: 'Not found'});
  }

  res.json(data);
});

// // These endpoints below are used by "cosmos" api
app.get("/staking/pool", async (req, res, next) => {
  const snapshot = await db.collection('staking.pool').get();
  const data = snapshot.docs[0].data();

  if(!data) {
    next({status: 400, message: 'Not found'});
  }

  res.json(data);
});

app.get("/minting/annual-provisions", async (req, res) => {
  res.json("18240689989533.703492076078609840");
});

// For "/activity" page
app.get("/txs", async (req, res) => {
  if (req.query && Object.keys(req.query).length) {
    // by sender
    if (req.query.sender) {
      const snapshot = await db.collection('txs.BySender').get();
      const data = snapshot.docs.map(doc => doc.data());

      return res.json(data);
    }
    if (req.query.recipient) {
      const snapshot = await db.collection('txs.ByRecipient').get();
      const data = snapshot.docs.map(doc => doc.data());

      return res.json(data);
    }
  }

  res.json([]);
});

// Final step of transaction
app.post("/txs", (req, res) => {
  res.json({
    height: "0",
    txhash: "CD68C99E83A8453E71A67F20DB7BF3057B85BDFA57D24D156C44A968F9D4E5D8"
  });
});


// Mocks for https://lcd.nylira.net/blocks/2369584
app.get("/blocks/:blockId", async (req, res) => {
  const { blockId } = req.params;

  const snapshot = await db.collection('blocks').get();
  const blocks = snapshot.docs.map(doc => doc.data());

  const data = blocks.find(block => block.header.height === blockId);

  if(!data) {
    next({status: 400, message: 'Not found'});
  }

  res.json(data);
});


app.get("/txs/:txId", async(req, res) => {
  const { txId } = req.params;

  const snapshot = await db.collection('transactions').get();
  const txs = snapshot.docs.map(doc => doc.data());

  const data = txs.find(tx => tx.txhash === txId);

  if(!data) {
    next({status: 400, message: 'Not found'});
  }

  res.json(data);
});


app.use(function (err, req, res, next) {
  if(err) {
    res.status(err.status || 500).json({status: err.status, message: err.message})
  } else {
    next();
  }
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
// [END app]

module.exports = app;
