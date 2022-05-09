const Reader = require('./../../app/utils/Reader')

describe("Test reader",() =>{
    test("Leyendo json db students", () =>{
        const students = Reader.readFileJson("students.json");
        expect(students).toBe(explorers);
    })
})