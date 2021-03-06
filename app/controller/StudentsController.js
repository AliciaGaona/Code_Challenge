const StudentService =require("../services/StudentService")
const Reader = require ("../utils/Reader")

class StudentsController{
    static getStudents(){
        const studentsReader = Reader.readFileJson("students.json");
        const studentsAll= StudentService.getStudents(studentsReader);
        return studentsAll;
    }

    static getStudentsFilterEmail(){
        const students = Reader.readFileJson("students.json");
        const studentsEmail = StudentService.getStudentsFilterEmail(students);
        return studentsEmail;
    }

    static getStudentsFilterCreditos(){
        const students = Reader.readFileJson("students.json");
        const studentsEmail = StudentService.getStudentsFilterCreditos(students);
        return studentsEmail;
    }
    
}

module.exports=StudentsController