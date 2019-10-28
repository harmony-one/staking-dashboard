const functions = require('firebase-functions');
const validators = require('./mock-data/validators');
const proposals = require('./mock-data/proposals');
const networks = require('./mock-data/networks');

let counter = 0;
setInterval(() => counter++, 2000);
exports.validators = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST');

  res.status(200).json(validators);
});

exports.counter = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST');

  res.status(200).json({ counter });
});

exports.proposals = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST');

  res.status(200).json(proposals);
});

exports.networks = functions.https.onRequest((req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Methods', 'GET, POST');

  res.status(200).json(networks);
});
