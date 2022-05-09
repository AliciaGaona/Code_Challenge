const StudentsController= require("../../app/controller/StudentsController")

  test("Prueba unitaria para primer requerimiento, metodo que trae todos los estudiantes controller", () =>{
    const getStudents= StudentsController.getStudents();
    expect(getStudents).not.toBeUndefined();

    test("Prueba unitaria segundo requrimiento getStudentsFilterEmail, controller ", () =>{
    const getStudentsFilterEmail=StudentsController.getStudentsFilterEmail("haveCertification");
    expect(getStudentsFilterEmail).toBeDefined();
    })
    
}) 