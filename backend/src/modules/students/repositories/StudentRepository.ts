import { getRepository, Repository } from "typeorm";

import { Student as StudentEntity } from "../entities/student";
import { IStudentRepositoryDTO, IStudentRepository } from "./IStudentsRepository";

export class StudentRepository implements IStudentRepository {
  private ormRepository: Repository<StudentEntity>;

  constructor() {
    this.ormRepository = getRepository(StudentEntity);
  }

  get name(): string {
    return this.name;
  }

  async create({ name, email, ra, cpf }: IStudentRepositoryDTO): Promise<void> {
    const student = this.ormRepository.create({
      name,
      email,
      cpf,
      ra,
    });

    await this.ormRepository.save(student);
  }

  async findByRa(ra: string): Promise<StudentEntity | undefined> {
    const student = await this.ormRepository.findOne(ra);
    return student;
  }

  async list(): Promise<StudentEntity[] | []> {
    const students = await this.ormRepository.find();
    return students;
  }

  async update({
    id,
    name,
    email,
    cpf,
  }: IStudentRepositoryDTO): Promise<StudentEntity | undefined> {
    await this.ormRepository.update({ id }, { name, email, cpf });
    const student = await this.ormRepository.findOne({ id });
    return student;
  }
}
