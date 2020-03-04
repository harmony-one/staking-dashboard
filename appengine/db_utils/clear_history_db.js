const admin = require('firebase-admin')
var serviceAccount = require('./keys/staking_explorer.json')

const DATABASE_URL = process.env.DATABASE_URL || 'https://staking-explorer.firebaseio.com'

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: DATABASE_URL
})

const db = admin.firestore()

const removeCollection = (collectionId) => {
  db.collection(collectionId).listDocuments().then(val => {
    Promise.all(val.map(val => val.delete()))
  })
}

db.listCollections().then(res => {
  res.forEach(collection => {
    const { collectionId } = collection._queryOptions

    if (collectionId.indexOf('_history') > -1) {
      console.log('Remove: ', collectionId)

      removeCollection(collectionId)
    }
  })
})
