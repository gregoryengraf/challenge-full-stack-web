import { Request, Response } from "express";

import { ListStudentUseCase } from "./ListStudentUseCase";

export class ListStudentController {
  constructor(private listStudentUseCase: ListStudentUseCase) {}
  async handle(req: Request, res: Response): Promise<Response> {
    const allStudents = await this.listStudentUseCase.execute();
    return res.status(200).json(allStudents);
  }
}
