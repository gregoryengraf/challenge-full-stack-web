import { Request, Response } from "express";

import { CreateStudentUseCase } from "./CreateStudentUseCase";

export class CreateStudentController {
  constructor(private createStudentUseCase: CreateStudentUseCase) {}

  async handle(req: Request, res: Response): Promise<Response> {
    const { name, email, cpf, ra } = req.body;

    await this.createStudentUseCase.execute({ name, email, cpf, ra });

    return res.status(201).send();
  }
}
