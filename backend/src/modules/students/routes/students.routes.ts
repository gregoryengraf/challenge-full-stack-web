import { Router } from "express";

import createStudentController from "../useCases/createStudent";
import listStudentController from "../useCases/listStudent";
import updateStudentController from "../useCases/updateStudent";

const studentRoutes = Router();

studentRoutes.get("/", (req, res) => {
  return listStudentController().handle(req, res);
});

studentRoutes.post("/", (req, res) => {
  return createStudentController().handle(req, res);
});

studentRoutes.put("/:id", (req, res) => {
  return updateStudentController().handle(req, res);
});

studentRoutes.get("/:id", (req, res) => {
  return res.send("Student updated succcesfull");
});

studentRoutes.delete("/:id", (req, res) => {
  return res.send("Student updated succcesfull");
});

export { studentRoutes };
