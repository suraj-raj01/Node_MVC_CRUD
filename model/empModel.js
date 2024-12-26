// Import the mongoose library, which is an Object Data Modeling (ODM) library for MongoDB and Node.js.
const mongoose = require("mongoose");

// Define a schema for the employee model. A schema defines the structure of the documents within a collection.
const empSchema = new mongoose.Schema({
    empno: Number,       // Employee number, stored as a Number.
    empname: String,     // Employee name, stored as a String.
    empcity: String,     // Employee city, stored as a String.
    empsalary: Number    // Employee salary, stored as a Number.
});

// Export the model based on the schema. The first argument is the name of the model ('employee'), and the second argument is the schema ('empSchema').
// This model will be used to interact with the 'employees' collection in the MongoDB database.
module.exports = mongoose.model("employee", empSchema);