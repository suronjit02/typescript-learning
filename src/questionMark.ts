// ? : ternary operator : decision making
// ?? : nullish coalescing operator
// ?. optional chaining

// ternary

const eligibleForMarriage = (age: number) => {
  const result =
    age >= 21 ? "Eligible for marriage." : "Not eligible for marriage.";

  console.log(result);
};

eligibleForMarriage(22);

// ?? nullish coalescing operator : work only for null or undefine value

const userTheme = undefined; // also for null
const selectedTheme = userTheme ?? "Light theme"; //set the default value Light Theme

console.log(selectedTheme);

// ---------------------------------------------------------------------------

const isAuthenticated = "";

const resultWithTernary = isAuthenticated ? isAuthenticated : "You are guest";

const resultWithNullish = isAuthenticated ?? "You are guest";

console.log({ resultWithTernary }, { resultWithNullish });

// optional chaining

const user: {
  address: {
    city: string;
    town: string;
    postalCode?: string;
  };
} = {
  address: {
    city: "Dhaka",
    town: "Banani",
  },
};

const postalCode = user?.address?.postalCode; // write ? before . for optional

console.log(postalCode);
