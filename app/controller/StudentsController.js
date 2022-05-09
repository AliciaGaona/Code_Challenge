const StudentService =require("../services/StudentService")
const Reader = require ("../utils/Reader")

class StudentsController{
    static getStudents(){
        const students = Reader.readFileJson("students.json");
        return students;
    }
}