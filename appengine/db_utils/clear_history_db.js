const admin = require('firebase-admin')
var serviceAccount = require('../keys/staking_explorer.json')

const DATABASE_URL = process.env.DATABASE_URL || 'https://staking-explorer.firebaseio.com'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: DATABASE_URL
})

const db = admin.firestore()

const removeCollection = (collectionId) => {
  return db.collection(collectionId).listDocuments().then(val => {
    console.log('Remove: ', collectionId)

    return Promise.all(val.map(val => val.delete()))
  })
}

db.listCollections().then(res => {
  res.reduce((asyncRes, collection) => {
    const { collectionId } = collection._queryOptions

    if (collectionId.indexOf('_history') > -1) {
      return asyncRes
        .then(() => removeCollection(collectionId))
        .catch(err => console.log('Error ', collectionId, err))
    }

    return asyncRes
  }, Promise.resolve())
})
