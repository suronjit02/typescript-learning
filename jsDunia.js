let userName = "suronjit123";

userName = 123; //no matter its number or string for js environment

console.log(userName);

// ------------------------------------------------------------------

const friends = ["Rahim", "Karim"];

const schoolFriends = ["pintu", "chintu", "bulbul"];

const collegeFriends = ["Shakib", "Pranto", "Jahid"];

friends.push(schoolFriends);

console.log(friends); // here no error show cause its js. but is not right that we understand after run and a result like, [ 'Rahim', 'Karim', [ 'pintu', 'chintu', 'bulbul' ] ]
