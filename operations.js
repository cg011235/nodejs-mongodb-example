/*
 * Implement CURD operations on the mongodb
 */

const assert = require('assert');

// Inserts new document in DB - C
exports.insertDocument = (db, document, collection) => {
    const coll = db.collection(collection);
    return coll.insert(document);
};

// Update document with new record - U
exports.updateDocument = (db, document, update, collection) => {
    const coll = db.collection(collection);
   return coll.updateOne(document, { $set: update }, null);
};

// Find and read document - R
exports.findDocuments = (db, collection) => {
    const coll = db.collection(collection);
    return coll.find({}).toArray();
};

// Delete specific document from mongoDB - D
exports.removeDocument = (db, document, collection) => {
    const coll = db.collection(collection);
    return coll.deleteOne(document)
};
