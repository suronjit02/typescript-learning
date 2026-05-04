// mapped types

// map

const arrayOfNum: number[] = [1, 2, 5, 6];

const arrOfNumToStringUsingMap: string[] = arrayOfNum.map((num) =>
  num.toString(),
);

console.log(arrOfNumToStringUsingMap);

// ------------------------------------------

type AreaOfNum = {
  height: number;
  width: number;
};

type height = AreaOfNum["height"]; //type number find

// type AreaOfString = {
//   height: string;
//   width: string;
// };

// type AreaOfString = {
//   [key in "height" | "width"]: string;
// };

type Area<T> = {
  [key in keyof T]: T[key];
};

const area1: Area<{ height: string; width: number }> = {
  height: "50",
  width: 34,
};
