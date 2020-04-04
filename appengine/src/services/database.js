const DATABASE_URL =
  process.env.DATABASE_URL || 'https://staking-explorer.firebaseio.com'

module.exports = function() {
  // Init admin
  const admin = require('firebase-admin')
  var serviceAccount = require('../../keys/staking_explorer.json')

  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: DATABASE_URL
  })

  const db = admin.firestore()

  const getCollectionData = async collectionName => {
    const snapshot = await db.collection(collectionName).get()
    return snapshot.docs.map(doc => doc.data())
  }

  const updateDocument = async (collectionName, docName, data) => {
    await db
      .collection(collectionName)
      .doc(docName)
      .set(data)
  }

  const getCollectionDataWithLimit = async (
    collectionName,
    address,
    orderBy,
    limit
  ) => {
    try {
      const snapshot = await db
        .collection(collectionName)
        .where('address', '==', address)
        .orderBy(orderBy, 'desc')
        .limit(limit)
        .get()
      return snapshot.docs.map(doc => doc.data())
    } catch (err) {
      console.log('getCollectionDataWithLimit: ', err)
      return []
    }
  }

  const getGlobalDataWithLimit = async (collectionName, orderBy, limit) => {
    try {
      const snapshot = await db
        .collection(collectionName)
        .orderBy(orderBy, 'desc')
        .limit(limit)
        .get()
      return snapshot.docs.map(doc => doc.data())
    } catch (err) {
      console.log(`error when get global data ${collectionName}`)
      return []
    }
  }

  return {
    db,
    getCollectionData,
    getCollectionDataWithLimit,
    updateDocument,
    getGlobalDataWithLimit
  }
}
