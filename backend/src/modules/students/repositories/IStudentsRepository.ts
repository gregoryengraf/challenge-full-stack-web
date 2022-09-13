import { Student } from "../entities/student";

export interface IStudentRepositoryDTO {
  id?: string;
  name: string;
  email: string;
  cpf: string;
  ra?: string;
  created_at?: Date;
}

export interface IStudentRepository {
  create({ name, email, cpf, ra }: IStudentRepositoryDTO): Promise<void>;
  update({ id, name, email, cpf }: IStudentRepositoryDTO): Promise<Student | undefined>;
  findByRa(ra: string): Promise<Student | undefined>;
  list(): Promise<Student[] | []>;
}
