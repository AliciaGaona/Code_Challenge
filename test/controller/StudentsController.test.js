const StudentsController= require("../../app/controller/StudentsController")

  test("Prueba unitaria para primer requerimiento, metodo que trae todos los estudiantes controller", () =>{
    const getStudents= StudentsController.getStudents();
    expect(getStudents).not.toBeUndefined();
  });

    test("Prueba unitaria segundo requrimiento getStudentsFilterEmail, controller ", () =>{
      const students= [{ email: "Sharlene@visualpartnership.xyz",haveCertification: true}];
      const getStudents= StudentsController.getStudentsFilterEmail(students);
      expect(getStudents).not.toBeUndefined();
    });

    test("Pruena unitaria para 3er requerimiento endpoint para consultar todos los estudiantes con todos sus campos, controller ", ()=>{
      const students= [{ email: "Sharlene@visualpartnership.xyz",haveCertification: true}];
      const getStudents =StudentsController.getStudentsFilterCreditos(students);
      expect(getStudents.length).toBe(1);
  });
    
