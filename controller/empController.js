const EmpModel = require("../model/empModel")

const empHome = (req, res) => {
    res.render("Home");
}
const empInsert = (req, res) => {
    res.render("Insert");
}
const empDisplay = async(req, res) => {
    const myData = await EmpModel.find();
    res.render("Display",{Data:myData});
}
const empContact = (req, res) => {
    res.render("Contact");
}
const empDataSave = (req, res) => {
    const { eno, nm, ct, sal } = req.body;
    EmpModel.create({
        empno: eno,
        empname: nm,
        empcity: ct,
        empsalary: sal
    })
    res.render("Insert");
}

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

module.exports = {
    empHome,
    empInsert,
    empDisplay,
    empContact,
    empDataSave,
    dataUpdate,
    recDelete
}