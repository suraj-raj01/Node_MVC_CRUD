const express = require("express");
const route = express.Router();
const empController = require("../controller/empController")

route.get("/", empController.empHome);
route.get("/insert", empController.empInsert);
route.get("/display", empController.empDisplay);
route.get("/contact", empController.empContact);
route.post("/datasave", empController.empDataSave);
route.get("/update",empController.dataUpdate);
route.get("/recdel",empController.recDelete)

module.exports = route;