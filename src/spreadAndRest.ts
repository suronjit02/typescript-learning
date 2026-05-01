//  spread operator & rest operator

// spread operator

const friends = ["Rahim", "Karim"];

const schoolFriends = ["pintu", "chintu", "bulbul"];

const collegeFriends = ["Shakib", "Pranto", "Jahid"];

// friends.push(schoolFriends); // error

friends.push(...schoolFriends);

console.log(friends);

// object => spread

const user = {
  name: "suronjit",
  phone: "01774343443",
};

const otherInfo = { hobby: "outing", favColor: "white" };

const userInfo = { ...user, ...otherInfo };

console.log(userInfo);

// rest operator    -------------------------------------------------------------------------

// const sendInvite = (friend1: string, friend2: string, friend3: string) => {
//   console.log(`Sent Invitation to ${friend1}`);
//   console.log(`Sent Invitation to ${friend2}`);
//   console.log(`Sent Invitation to ${friend3}`);
// };

// sendInvite("pintu", "mintu", "biltu");

const sendInvite = (...friends: string[]) => {
  friends.forEach((friend: string) => {
    console.log(`Send Invite to ${friend}`);
  });
};

sendInvite("pintu", "mintu", "biltu", "giltu", "suronjit");
