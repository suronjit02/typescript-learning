// type assertion

let anything: any;

// anything = 222;
anything = "Suronjit";

anything as string;

// ----------------------------------

const kgToGM = (input: string | number): string | number | undefined => {
  if (typeof input === "number") {
    return input * 1000;
  } else if (typeof input === "string") {
    const [value] = input.split(" ");
    return `Converted output is: ${Number(value) * 1000}`;
  }
};

const result1 = kgToGM(3) as number;
console.log({ result1 });

const result2 = kgToGM("2 kg") as string;
console.log({ result2 });

// ------------------------------------------------------------

type CustomError = {
  message: string;
};

try {
} catch (err) {
  console.log((err as CustomError).message);
}

// use "as" for must sure a type
