import { IStudentRepository } from "../../repositories/IStudentsRepository";

interface IRequest {
  name: string;
  email: string;
  cpf: string;
  ra: string;
}

export class CreateStudentUseCase {
  constructor(private studentsRepository: IStudentRepository) {}

  async execute({ name, email, cpf, ra }: IRequest): Promise<void> {
    await this.studentsRepository.create({
      name,
      email,
      cpf,
      ra,
    });
  }
}
