import { StudentRepository } from "../../repositories/StudentRepository";
import { ListStudentController } from "./ListStudentController";
import { ListStudentUseCase } from "./ListStudentUseCase";

export default (): ListStudentController => {
  const studentRepository = new StudentRepository();
  const listStudentUseCase = new ListStudentUseCase(studentRepository);
  const listStudentController = new ListStudentController(listStudentUseCase);
  return listStudentController;
};
