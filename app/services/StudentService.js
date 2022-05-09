
class StudentService{
    static getStudents(studentsReader){
        return studentsReader;
    }

    static getStudentsFilterEmail(students){
      const explorersByMission = students.filter((student) => student.haveCertification == true);
          const studentsEmail =explorersByMission.map((studentt)=>studentt.email);
          return studentsEmail;
     //  const studentsEmailHaveCertification=studentsEmail.email;
    
    }



    
}

module.exports=StudentService