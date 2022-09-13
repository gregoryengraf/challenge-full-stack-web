import { Student } from "../../entities/student";
import { IStudentRepository } from "../../repositories/IStudentsRepository";

export class ListStudentUseCase {
  constructor(private studentsRepository: IStudentRepository) {}

  async execute(): Promise<Student[]> {
    const students = await this.studentsRepository.list();
    return students;
  }
}
