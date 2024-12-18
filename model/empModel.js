const mongoose = require("mongoose");
const empSchema = new mongoose.Schema({
    empno: Number,
    empname: String,
    empcity: String,
    empsalary: Number
})
module.exports = mongoose.model("employee", empSchema);