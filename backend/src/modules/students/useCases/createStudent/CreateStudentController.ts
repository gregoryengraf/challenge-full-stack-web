import { Request, Response } from "express";

import { IStudentRepository } from "../../repositories/IStudentsRepository";
import { CreateStudentUseCase } from "./CreateStudentUseCase";

export class CreateStudentController {
  constructor(
    private createStudentUseCase: CreateStudentUseCase,
    private studentRepository: IStudentRepository,
  ) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, cpf, ra } = req.body;

    try {
      if (!name || !email || !cpf || !ra) {
        return res.status(400).json("All data must be filled");
      }

      await this.createStudentUseCase.execute({ name, email, cpf, ra });
    } catch (e) {
      return res.status(400).json(e);
    }

    return res.status(201).send();
  }
}
