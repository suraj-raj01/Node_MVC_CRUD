// Import the employee model.
const EmpModel = require("../model/empModel");

// Controller function to render the Home page.
const empHome = (req, res) => {
    res.render("Home");
};

// Controller function to render the Insert page.
const empInsert = (req, res) => {
    res.render("Insert");
};

// Controller function to display all employee data.
const empDisplay = async (req, res) => {
    const myData = await EmpModel.find();
    res.render("Display", { Data: myData });
};

// Controller function to render the Contact page.
const empContact = (req, res) => {
    res.render("Contact");
};

// Controller function to save employee data from a form submission.
const empDataSave = (req, res) => {
    const { eno, nm, ct, sal } = req.body;
    EmpModel.create({
        empno: eno,
        empname: nm,
        empcity: ct,
        empsalary: sal
    });
    res.render("Insert");
};
const dataUpdate = async(req,res) =>{
    const Data = await EmpModel.find();
    res.render("Update",{Data:Data});
}

const recDelete = async(req,res) =>{
    const myId = req.query.id;
    await EmpModel.findByIdAndDelete(myId);
    const Data = await EmpModel.find();
    res.render("Update",{Data:Data})
}
// Export the controller functions for use in routes.
module.exports = {
    empHome,
    empInsert,
    empDisplay,
    empContact,
    empDataSave,
    dataUpdate,
    recDelete
};