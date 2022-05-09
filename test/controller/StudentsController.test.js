const StudentsController= require("../../app/controller/StudentsController")

  test("Prueba unitaria para primer requerimiento, metodo que trae todos los estudiantes controller", () =>{
    const getStudents= StudentsController.getStudents();
    expect(getStudents).not.toBeUndefined();
}) 