// constrain : strict rules

type Student = {
  id: number;
  name: string;
  dateOfBirth: string;
};

const addStudentToCourse = <T extends Student>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const student1 = {
  id: 123,
  name: "Suronjit",
  hasPen: true,
}; // date of birth missing

const student2 = {
  id: 33,
  name: "Jhankar Mahbub",
  dateOfBirth: "02 - 04 - 2000",
  hasCar: true,
  isMarried: true,
};

const student3 = {
  hasWatch: true,
}; // name and id & date of birth missing

const result = addStudentToCourse(student2);
console.log(result);
