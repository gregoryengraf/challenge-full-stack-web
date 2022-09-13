import { Request, Response } from "express";

import { UpdateStudentUseCase } from "./UpdateStudentUseCase";

export class UpdateStudentController {
  constructor(private updateStudentUseCase: UpdateStudentUseCase) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, email, cpf } = req.body;

    try {
      const student = await this.updateStudentUseCase.execute({ id, name, email, cpf });
      return res.status(200).json(student);
    } catch (e) {
      return res.status(400).json(e);
    }
  }
}
