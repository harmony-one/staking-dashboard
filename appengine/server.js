"use strict";

// [START app]
const express = require("express");
const cors = require("cors");

const routes = require("./src/routes");
const DBService = require("./src/services/database");

const app = express();
app.use(cors());

setInterval(() => {
//  console.log("hello");
  // pull data from blockchain into database
}, 1000);

app.get("/", (req, res) => {
  res.send("Hello from App Engine!");
});

//create dbService
const dbService = new DBService();

// Init routes
routes(app, dbService);

// send errors response
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
