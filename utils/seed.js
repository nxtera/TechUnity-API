const connection = require("../config/connection");
const { User, Thought } = require("../models");
const {
  getRandomUsername,
  getRandomEmail,
  getRandomThoughts,
  getRandomArrItem,
} = require("./data");

connection.on("error", (err) => err);

connection.once("open", async () => {
  console.log("connected");

  // Drop existing thoughts
  await Thought.deleteMany({});

  // Drop existing users
  await User.deleteMany({});

  const users = [];
  const thoughts = [];

  console.log(users);

  for (let i = 0; i < 25; i++) {
    let username = getRandomUsername();
    let usernameExists = users.find((user) => {
      if (user.username == username) {
        return true;
      }
      return false;
    });
    while (usernameExists) {
      username = getRandomUsername();
      usernameExists = users.find((user) => {
        if (user.username == username) {
          return true;
        }
        return false;
      });
    }
    let email = getRandomEmail();
    let emailExists = users.find((user) => {
      if (user.email == email) {
        return true;
      }
      return false;
    });
    while (emailExists) {
      email = getRandomEmail();
      emailExists = users.find((user) => {
        if (user.email == email) {
          return true;
        }
        return false;
      });
    }
    users.push({
      username,
      email,
    });
  }
  await User.collection.insertMany(users);

  for (let i = 0; i < 27; i++) {
    let thoughtItem = getRandomThoughts();
    let user = getRandomArrItem(users);
    thoughts.push({
      username: user.username,
      thoughtText: thoughtItem,
    });
  }

  await Thought.collection.insertMany(thoughts);

  //update instead of insertmany

  console.table(users);
  console.table(thoughts);
  console.info("Seeding complete! 🌱");
  process.exit(0);
});
