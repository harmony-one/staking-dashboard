"use strict";

// [START app]
const express = require("express");
const app = express();

setInterval(() => {
  console.log("hello");
  // pull data from blockchain into database
}, 1000);

app.get("/", (req, res) => {
  res.send("Hello from App Engine!");
});

// Listen to the App Engine-specified port, or 8080 otherwise
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
// [END app]

module.exports = app;
