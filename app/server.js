const StudentsController = require("../app/controller/StudentsController");
const express= require("express");
const app = express();
app.use(express.json());
const port= 3000;

app.get("/v1/explorers/all", (request, response) => {
    const explorersInMission = ExplorerController.getStudents();
    response.json(explorersInMission);
});