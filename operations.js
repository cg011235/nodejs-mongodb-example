/*
 * Implement CURD operations on the mongodb
 */

const assert = require('assert');

// Inserts new document in DB - C
exports.insertDocument = (db, document, collection, callback) => {
    const coll = db.collection(collection);
    coll.insert(document, (err, result) => {
        assert.equal(err, null);
        console.log("Inserted "+ result.result.n + " documents into the collection " + collection);
        callback(result);   // return result to caller
    });
};

// Update document with new record - U
exports.updateDocument = (db, document, update, collection, callback) => {
    const coll = db.collection(collection);
    coll.updateOne(document, { $set: update }, null, (err, result) => {
        assert.equal(err, null);
        console.log("Updated the document with ", update);
        callback(result);
    });
};

// Find and read document - R
exports.findDocuments = (db, collection, callback) => {
    const coll = db.collection(collection);
    coll.find({}).toArray((err, docs) => {
        assert.equal(err, null);
        callback(docs);
    });
};

// Delete specific document from mongoDB - D
exports.removeDocument = (db, document, collection, callback) => {
    const call = db.collection(collection);
    call.deleteOne(document, (err, result) => {
        assert.equal(err, null);
        console.log("Removed " + result.result.n + " document from the collection " + collection);
        callback(result);   // return result to caller);
    });
};
