// array, object

// array
let bazarList: string[] = ["eggs", "milk", "sugar"];

bazarList.push(123); //wrong
bazarList.push("potato"); // right

let mixedArr = ["eggs", 12, "milk", 1, "sugar", 2]; // auto understand that is string or number

let mixedArr2: (string | number)[] = ["eggs", 12, "milk", 1, "sugar", 2]; // command that

mixedArr2.push(true); //wrong

let coordinates: [number, number] = [20, 30];
let coordinates2: [number, number] = [20, 30, 50]; //wrong

let couple: [string, string] = ["husband", "wife"];

let suronjitNameAndRoll: [string, number] = ["Suronjit", 11];

// reference type : object

// const user = {
//   firstName: "Suronjit",
//   middleName: "Sutradhar",
//   lastName: "Binoy",
// };

// const user: { firstName: string; middleName: string; lastName: string } = {
//   firstName: "Suronjit",
//   middleName: "Sutradhar",
//   lastName: "Binoy",
// };

// const user2: {
//   university: "Northern University Bangladesh"; // value, type: literal type
//   firstName: string;
//   middleName?: string;
//   lastName: string;
//   isMarried: boolean;
// } = {
//   university: "Northern University Bangladesh",
//   firstName: "Suronjit",
//   lastName: "Sutradhar",
//   isMarried: false,
// };

const user2: {
  readonly university: string; //access modifier
  firstName: string;
  middleName?: string;
  lastName: string;
  isMarried: boolean;
} = {
  university: "Northern University Bangladesh",
  firstName: "Suronjit",
  lastName: "Sutradhar",
  isMarried: false,
};

user2.isMarried = true;

console.log(user2);
