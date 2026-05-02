// nullable type

const getUser = (input: string | null) => {
  if (input) {
    console.log(`From DB: ${input}`);
  } else {
    console.log("From DB: All User");
  }
};

getUser(null); // (input: string | null) without null define getUser not get a null

// ------------------------------     -------------------------------------

// unknown type

const discountCalculator = (input: unknown) => {
  if (typeof input === "number") {
    const discountPrice = input * 0.1;
    console.log(discountPrice);
  } else if (typeof input === "string") {
    const inputPrice = input.split(" ");
    const [price] = inputPrice;
    console.log(Number(price) * 0.1);
  } else {
    console.log("Wrong Input.");
  }
};

discountCalculator(100);
discountCalculator("100 TK");
discountCalculator(null);

// void type : never

const throwError = (msg: string): never => {
  throw new Error(msg);
}; // every time throw a error message. never return anything

throwError("Error...");
