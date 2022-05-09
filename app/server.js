const StudentsController = require("../app/controller/StudentsController");
const express= require("express");
const app = express();
app.use(express.json());
const port= 3000;

app.get("/v1/students/all", (request, response) => {
    const studentsAll = StudentsController.getStudents();
    response.json(explorersInMission);
});

app.get("/v1/students/Email/haveCertification", (request, response) => {
    const studentsHaveCertification = StudentsController.getStudentsFilterEmail();
    response.json(studentsHaveCertification);
});


app.get("/v1/students/credits", (request, response) => {
    const studentsCredits = StudentsController.getStudentsFilterCreditos();
    response.json(studentsCredits);
});

app.listen(port, () => {
    console.log(`Students API in localhost:${port}`);
});