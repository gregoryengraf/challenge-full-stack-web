import { Router } from "express";

import { studentRoutes } from "../modules/students/infra/http/routes/students.routes";

const router = Router();

router.get("/", (req, res) => {
  return res.send("Join the silence...");
});

router.use("/students", studentRoutes);

export { router };
