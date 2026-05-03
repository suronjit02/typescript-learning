// Generic Function

const createArrayWithGeneric = <T>(value: T) => {
  return [value];
};
const arrString = createArrayWithGeneric("Apple");
const arrNum = createArrayWithGeneric(345);
const arrObj = createArrayWithGeneric({
  id: 233,
  name: "Suronjit",
});

// ---------------------------------------------------------

// tuple

const createArrayWithTuple = (
  param1: {
    id: string;
    name: string;
  },
  param2: string,
) => [param1, param2];

const createArrayTupleWithGeneric = <X, Y>(param1: X, param2: Y) => [
  param1,
  param2,
];

const res1 = createArrayTupleWithGeneric("Suronjit", false);

const res2 = createArrayTupleWithGeneric(232, { name: "Suronjit" });

// -------------------------------------------------------------------

const addStudentToCourse = <T>(studentInfo: T) => {
  return {
    course: "Next Level",
    ...studentInfo,
  };
};

const student1 = {
  id: 123,
  name: "Suronjit",
  hasPen: true,
};

const student2 = {
  id: 33,
  name: "Jhankar Mahbub",
  hasCar: true,
  isMarried: true,
};

const result = addStudentToCourse(student2);
console.log(result);

// ------------------------------------------------------------------------------------------------

// const createArrayFromString = (value: string) => [value];

// const createArrayFromNumber = (value: number) => [value];

// const createArrayFromObject = (value: { id: number; name: string }) => {
//   return [value];
// };

// const arrString = createArrayFromString("Apple");
// const arrNum = createArrayFromNumber(345);
// const arrObj = createArrayFromObject({
//   id: 233,
//   name: "Suronjit",
// });
