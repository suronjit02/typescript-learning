// type Alias

type User = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  gender: "male" | "female";
  contactNo: number;
  address: {
    division: string;
    city: string;
  };
};

const user1: User = {
  id: 123,
  name: {
    firstName: "suronjti",
    lastName: "sutradhar",
  },
  gender: "male",
  contactNo: 12124,
  address: {
    division: "dhaka",
    city: "dhaka",
  },
};

const user2: User = {
  id: 122,
  name: {
    firstName: "Messi",
    lastName: "Vai",
  },
  gender: "male",
  contactNo: 121434524,
  address: {
    division: "buenos ayars",
    city: "kicu ekta hobe",
  },
};

// function --------------------------------

type AddFunction = (value1: number, value2: number) => number;

const add: AddFunction = (num1, num2) => num1 + num2;
