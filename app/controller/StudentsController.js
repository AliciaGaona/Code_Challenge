const StudentService =require("../services/StudentService")
const Reader = require ("../utils/Reader")

class StudentsController{
    static getStudents(){
        const studentsReader = Reader.readFileJson("students.json");
        const studentsAll= StudentService.getStudents(studentsReader);
        return studentsAll;
    }

    static getStudentsFilterEmail(haveCertification){
        const studentsReader = Reader.readFileJson("students.json");
        const studentsEmail = StudentService.getStudentsFilterEmail(studentsReader, haveCertification);
        return studentsEmail;
    }

}

module.exports=StudentsController