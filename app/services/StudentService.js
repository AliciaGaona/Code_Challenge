
class StudentService{
    static getStudents(studentsReader){
        return studentsReader;
    }

    static getStudentsFilterEmail(students){
      const explorersByMission = students.filter((student) => student.haveCertification == true);
          const studentsEmail =explorersByMission.map((student)=>student.email);
          return studentsEmail;
    }



    
}

module.exports=StudentService