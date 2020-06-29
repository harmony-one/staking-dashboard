import admin from 'firebase-admin';
const serviceAccount = require('../../keys/staking_explorer.json');

const DATABASE_URL = process.env.DATABASE_URL || 'https://staking-explorer.firebaseio.com';

export class DBService {
  public db: admin.firestore.Firestore;

  constructor() {
    // Init admin
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: DATABASE_URL,
    });

    this.db = admin.firestore();
  }

  public getCollectionData = async (collectionName: string): Promise<any> => {
    const snapshot = await this.db.collection(collectionName).get();
    return snapshot.docs.map(doc => doc.data());
  };

  public updateDocument = async (collectionName: string, docName: string, data) => {
    await this.db.collection(collectionName).doc(docName).set(data);
  };

  public getCollectionDataWithLimit = async (
    collectionName: string,
    address: string,
    orderBy: string,
    limit: number
  ) => {
    try {
      const snapshot = await this.db
        .collection(collectionName)
        .where('address', '==', address)
        .orderBy(orderBy, 'desc')
        .limit(limit)
        .get();
      return snapshot.docs.map(doc => doc.data());
    } catch (err) {
      console.log('getCollectionDataWithLimit: ', err);
      return [];
    }
  };

  public getGlobalDataWithLimit = async (collectionName, orderBy, limit) => {
    try {
      const snapshot = await this.db
        .collection(collectionName)
        .orderBy(orderBy, 'desc')
        .limit(limit)
        .get();
      return snapshot.docs.map(doc => doc.data());
    } catch (err) {
      console.log(`error when get global data ${collectionName}`);
      return [];
    }
  };
}
