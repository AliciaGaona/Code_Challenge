const StudentService = require('./../../app/services/StudentService')

//Habilitar un endpoint para consultar todos los estudiantes que tengan credits mayor a 500.
//endpoint para consultar los emails de todos los estudiantes que tengan certificación haveCertification.
//endpoint para consultar todos los estudiantes con todos sus campos.

describe("Test para servicios StudentServer", () =>{
    test("Prueba unitaria para primer requerimiento, metodo que trae todos los estudiantes", () =>{
        const getStudents= StudentService.getStudents();
        expect(getStudents);
    });

    test("Prueba unitaria para segundo requerimiento, metodo consultar los emails de todos los estudiantes que tengan certificación haveCertification.", () =>{    
        const students= [{ email: "Sharlene@visualpartnership.xyz",haveCertification: true}];
        const getStudents= StudentService.getStudentsFilterEmail(students);
       expect(getStudents.length).toBe(1);      
    });

    // test("Pruena unitaria para 3er requerimiento endpoint para consultar todos los estudiantes con todos sus campos.", ()=>{
    //     const students= ({ email: "Sharlene@visualpartnership.xyz",haveCertification: true});
    //     const getStudents =StudentService.getStudentsFilterCreditos(students);
    //     expect(getStudents.length).toBe(2);
    // });
})