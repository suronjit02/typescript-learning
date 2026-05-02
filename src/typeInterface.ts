type User = {
  name: string;
  age: number;
};

// interface only work in object type data: ex: array, object, function
interface IUser {
  name: string;
  age: number;
}

type Role = {
  role: "admin" | "user";
};

type UserWithRole = User & Role; // intersection

// interface
interface IUserWithRole extends IUser {
  role: "admin" | "user";
}

const user1: UserWithRole = {
  name: "Suronjit",
  age: 22,
  role: "admin",
};
const user2: IUser = {
  name: "Bithi",
  age: 23,
};

// -----------------------------------------------------

type IsAdmin = boolean;

const isAdmin: IsAdmin = false; // must be false or true

// -----------------------------------------------------

// function

type Add = (num1: number, num2: number) => number;

interface IAdd {
  (num1: number, num2: number): number; // call signature
}

const add: Add = (num1, num2) => num1 + num2;

// array

type Friends = string[];

interface IFriends {
  [index: number]: string; // index signature
}

const friends: IFriends = ["A", "B", "C"];
