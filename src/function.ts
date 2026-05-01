// Function
// arrow function , normal function

// normal function
function add(num1: number, num2: number) {
  return num1 + num2;
}

// add(2, "3"); //wrong

// arrow function
const addArrow = (num1: number, num2: number): number => num1 + num2;

addArrow(2, 4);

// object => function => method

const poorUser = {
  name: "suronjit",
  balance: 0,
  addBalance(value: number) {
    const totalBalance = this.balance + value;
    return totalBalance;
  },
};

poorUser.addBalance(100000);

// ------------------------------------

const arr: number[] = [1, 2, 3, 4];

const sqrArray = arr.map((elem: number): number => elem * elem);
