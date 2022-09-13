import { Student } from "../../entities/student";
import { IStudentRepository } from "../../repositories/IStudentsRepository";

interface IRequest {
  id: string;
  name: string;
  email: string;
  cpf: string;
}

export class UpdateStudentUseCase {
  constructor(private studentsRepository: IStudentRepository) {}

  async execute({ id, name, email, cpf }: IRequest): Promise<Student | undefined> {
    const students = await this.studentsRepository.update({
      id,
      name,
      email,
      cpf,
    });
    return students;
  }
}
