const admin = require("firebase-admin");
var serviceAccount = require("./keys/staking_explorer.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://staking-explorer.firebaseio.com"
});

let db = admin.firestore();

let addDoc = db
  .collection("validators")
  .add({
    name: "Tokyo",
    country: "Japan"
  })
  .then(ref => {
    console.log("Added document with ID: ", ref.id);
  });
