const StudentService =require("./app/services/StudentService")
const StudentsController =require("./app/controller/StudentsController")
const Reader = require ("./app/utils/Reader")

const student= Reader.readFileJson("students.json");
//console.log(student)

const getStudentsFilterEmail= StudentsController.getStudentsFilterEmail(student)
console.log(getStudentsFilterEmail)


