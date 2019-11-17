module.exports = function () {
    // Init admin
    const admin = require("firebase-admin");
    var serviceAccount = require("./keys/staking_explorer.json");

    admin.initializeApp({
        credential: admin.credential.cert(serviceAccount),
        databaseURL: "https://staking-explorer.firebaseio.com"
    });

    const db = admin.firestore();

    const getCollectionData = async (collectionName) => {
        const snapshot = await db.collection(collectionName).get();
        return snapshot.docs.map(doc => doc.data());
    };

    return {
        db,
        getCollectionData,
    }
};