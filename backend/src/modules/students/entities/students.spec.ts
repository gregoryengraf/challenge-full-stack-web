import { expect, test } from "vitest";

import { Student } from "./student";

test("create an student", () => {
  const student = new Student({
    name: "Joey Caruso",
    email: "joey_caruso@everbodyheatescris.com",
    ra: "xpto_2423",
    cpf: "07183386948",
    created_at: new Date()
  });

  // expect(student.toBeInstanceOf(Student));
  expect(student.name).toEqual("Joey Caruso");
});
