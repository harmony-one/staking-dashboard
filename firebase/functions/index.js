const functions = require('firebase-functions');
const validators = require('./mock-data/validators');

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
