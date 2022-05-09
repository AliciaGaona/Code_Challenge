
class StudentService{
    static getStudents(studentsReader){
        return studentsReader;
    }

    static getStudentsFilterEmail(students,email){
        const studentsEmail =students.filter((student)=>students.email == email);
        return studentsEmail;
    }

    
}

module.exports=StudentService