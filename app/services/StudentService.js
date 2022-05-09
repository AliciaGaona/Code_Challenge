
class StudentService{
    static getStudents(studentsReader){
        return studentsReader;
    }

    static getStudentsFilterEmail(students){
        if(students.haveCertification){
          const studentsEmail =students.map((student)=>student.email);
          return studentsEmail;
        }
      
     //  const studentsEmailHaveCertification=studentsEmail.email;
    
    }



    
}

module.exports=StudentService