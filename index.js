// Import the required libraries and modules.
const express = require("express");
const app = express();
const port = 8080;
const mongoose = require("mongoose");
const empRoutes = require("./routes/employeeRoute");
const bodyParser = require("body-parser");

// Connect to the MongoDB database.
mongoose.connect("mongodb://127.0.0.1:27017/test").then(() => {
    console.log("Database Connected !!");
});

// Use body-parser middleware to parse incoming request bodies.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set the view engine to EJS (Embedded JavaScript).
app.set("view engine", "ejs");

// Use the employee routes for handling requests to the root URL.
app.use("/", empRoutes);

// Start the server and listen on the specified port.
app.listen(port, () => {
    console.log(`server run on port ${port} !!`);
});