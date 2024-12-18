const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const empRoutes = require("./routes/employeeRoute")
const bodyParser = require("body-parser");
mongoose.connect("mongodb://127.0.0.1:27017/test").then(() => {
    console.log("Database Connected !!");
})
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.set("view engine", "ejs");
app.use("/", empRoutes);
app.listen(port, () => {
    console.log(`server run on port ${port} !!`);
})