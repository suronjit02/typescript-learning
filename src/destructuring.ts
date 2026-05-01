// destructuring

// object destructuring

const user = {
  id: 123,
  name: {
    firstName: "Suronjit",
    middleName: "Sutradhar",
    lastName: "Binoy",
  },
  gender: "male",
  favColor: "white",
};

const {
  favColor: myfavColor,
  name: { middleName },
} = user;

// console.log(favColor);
console.log(myfavColor);
console.log(middleName);

// array destructuring

const friends = ["karim", "rahim", "mohim"];

// const myBestFriend = friends[1];

const [, , myBestFriend] = friends;

console.log(myBestFriend);
