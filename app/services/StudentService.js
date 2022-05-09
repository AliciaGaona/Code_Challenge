
class StudentService{
    static getStudents(studentsReader){
        return studentsReader;
    }

    static getStudentsFilterEmail(students,haveCertification){
        const studentsEmail =students.filter((student)=>students.haveCertification == true);
        const studentsEmailHaveCertification=studentsEmail.email;
        return studentsEmailHaveCertification;
    }

    
}

module.exports=StudentService