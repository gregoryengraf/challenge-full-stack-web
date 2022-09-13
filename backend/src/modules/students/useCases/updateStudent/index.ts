import { StudentRepository } from "../../repositories/StudentRepository";
import { UpdateStudentController } from "./UpdateStudentController";
import { UpdateStudentUseCase } from "./UpdateStudentUseCase";

export default (): UpdateStudentController => {
  const studentRepository = new StudentRepository();
  const updateStudentUseCase = new UpdateStudentUseCase(studentRepository);
  const updateStudentController = new UpdateStudentController(updateStudentUseCase);
  return updateStudentController;
};
