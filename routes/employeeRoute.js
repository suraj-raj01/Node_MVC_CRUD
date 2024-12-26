// Import the required libraries and modules.
const express = require("express");
const route = express.Router();
const empController = require("../controller/empController");

// Define routes and map them to controller functions.
route.get("/", empController.empHome);
route.get("/insert", empController.empInsert);
route.get("/display", empController.empDisplay);
route.get("/contact", empController.empContact);
route.post("/datasave", empController.empDataSave);
route.get("/update", empController.dataUpdate);
route.get("/recdel", empController.recDelete);

// Export the route module.
module.exports = route;