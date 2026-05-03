// dynamically generalize: Generic

type GenericArray<T> = Array<T>; // type GenericArray<T> = T[];  : both are same, T is a placeholder for any value.

// const friends: string[] = ["Suronjit", "Bithi", "Shreya"];
const friends: GenericArray<string> = ["Suronjit", "Bithi", "Shreya"];

// const rollNumbers: number[] = [1, 2, 3, 4, 5];
const rollNumbers: GenericArray<number> = [1, 2, 3, 4, 5];

// const isEligibleList: boolean[] = [true, false, true, true];
const isEligibleList: GenericArray<boolean> = [true, false, true, true];

// object with generics

const userList: GenericArray<{ name: string; age: number }> = [
  {
    name: "Suronjit",
    age: 22,
  },
  {
    name: "Bithi",
    age: 23,
  },
];

// example of how work generics ---------------------------------
const sqrFunc = (value: number) => {
  return value * value;
};

sqrFunc(5);
// --------------------------------------------------------------

// --------------------------------------------------------------

type coordinates<X, Y> = [X, Y];

const coordinates1: coordinates<number, number> = [10, 20];
const coordinates2: coordinates<string, string> = ["10", "20"];

// --------------------------------------------------------------
