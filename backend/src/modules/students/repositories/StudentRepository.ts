import { getRepository, Repository } from "typeorm";

import { Student } from "../entities/student";
import { IStudentRepositoryDTO, IStudentRepository } from "./IStudentsRepository";

export class StudentRepository implements IStudentRepository {
  private repository: Repository<Student>;

  constructor() {
    this.repository = getRepository(Student);
  }

  async create({ name, email, ra, cpf }: IStudentRepositoryDTO): Promise<void> {
    const student = this.repository.create({
      name,
      email,
      cpf,
      ra,
    });

    await this.repository.save(student);
  }

  async list(): Promise<Student[]> {
    const students = await this.repository.find();
    return students;
  }
}
