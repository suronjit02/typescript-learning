// keyOf : type operator

type RichPeopleVehicle = {
  car: string;
  bike: string;
  cng: string;
};

type MyVehicle1 = "bike" | "car" | "cng";
type MyVehicle2 = keyof RichPeopleVehicle;

const MyVehicle: MyVehicle2 = "car";

// -------------------------------------------------

type User = {
  id: number;
  name: string;
  address: {
    city: string;
  };
};

const user: User = {
  id: 22,
  name: "suronjit",
  address: {
    city: "Dhaka",
  },
};

// const myId = user.id;
// const myId = user["id"];
// const myName = user["name"];
// const address = user["address"];

// console.log({ myId, myName, address });

const getPropertyFromObj = <X>(obj: X, key: keyof X) => {
  return obj[key];
};

// const result = getPropertyFromObj(user, "name");
// console.log(result);

const product = {
  brand: "HP",
};

const student = {
  id: 123,
  class: "three",
};

const result2 = getPropertyFromObj(product, "brand");
const result3 = getPropertyFromObj(student, "id");

console.log(result3);
