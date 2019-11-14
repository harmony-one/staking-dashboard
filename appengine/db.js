const admin = require("firebase-admin");
var serviceAccount = require("./keys/staking_explorer.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://staking-explorer.firebaseio.com"
});

const db = admin.firestore();

const getPath = name => `../firebase/functions/mock-data/${name}.js`;

const collections = [
    {
        name: 'validators',
        path: getPath('validators'),
    },
    {
        name: 'proposals',
        path: getPath('proposals'),
    },
    {
        name: 'networks',
        path: getPath('networks'),
    },
    {
        name: 'accounts',
        path: getPath('account'),
    },
    {
        name: 'staking.parameters',
        path: getPath('staking.parameters'),
    },
    {
        name: 'staking.pool',
        path: getPath('staking.pool'),
    },
    {
        name: 'transaction.info',
        path: getPath('transaction.info'),
    },
    {
        name: 'txs.blocks',
        path: getPath('txs/blocks'),
    },
    {
        name: 'txs.byRecipient',
        path: getPath('txs/byRecipient'),
    },
    {
        name: 'txs.bySender',
        path: getPath('txs/bySender'),
    },
];

const addNewDataToCollection = (collectionName, data) => {
    console.log("Added documents for: ", collectionName);

    if(Array.isArray(data)) {
        data.forEach(doc => {
            db
                .collection(collectionName)
                .add(doc)
                .then(ref => {
                    console.log("Added document with ID: ", ref.id);
                });
        })
    } else {
        db
            .collection(collectionName)
            .add(data)
            .then(ref => {
                console.log("Added document with ID: ", ref.id);
            });
    }
}

collections.forEach((collection) => {
    const data = require(collection.path);

    console.log("Remove documents for: ", collection.name);

    // First - clear collection
    db.collection(collection.name).listDocuments().then(val => {
        Promise.all(val.map(val => val.delete()))
            .then(() => addNewDataToCollection(collection.name, data)); // then add new data
    })
});

