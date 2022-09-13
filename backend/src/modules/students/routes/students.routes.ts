import { Router } from "express";

import createStudentController from "../useCases/createStudent";

const studentRoutes = Router();

studentRoutes.get("/", (req, res) => {
  return res.send("student list");
});

studentRoutes.post("/", (req, res) => {
  return createStudentController().handle(req, res);
});

studentRoutes.put("/", (req, res) => {
  return res.send("Student updated succcesfull");
});

studentRoutes.get("/:id", (req, res) => {
  return res.send("Student updated succcesfull");
});

studentRoutes.delete("/:id", (req, res) => {
  return res.send("Student updated succcesfull");
});

export { studentRoutes };
