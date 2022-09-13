import { StudentRepository } from "../../repositories/StudentRepository";
import { CreateStudentController } from "./CreateStudentController";
import { CreateStudentUseCase } from "./CreateStudentUseCase";

export default (): CreateStudentController => {
  const studentRepository = new StudentRepository();
  const createStudentUseCase = new CreateStudentUseCase(studentRepository);
  const createStudentController = new CreateStudentController(createStudentUseCase);
  return createStudentController;
};
