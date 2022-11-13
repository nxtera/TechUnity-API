const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getRandomUsername, getRandomEmail } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
console.log('connected');

// Drop existing thoughts
await Thought.deleteMany({});

// Drop existing users
await User.deleteMany({});

const users = [];
const thoughts =[];

console.log(users)

for (let i = 0; i < 25; i++) {
    const username = getRandomUsername();
    const email = getRandomEmail();

    users.push({
      username,
      email,
    });
  }
  await User.collection.insertMany(users);
  await Thought.collection.insertMany(thoughts);

  console.table(users);
  console.table(thoughts);
  console.info('Seeding complete! 🌱');
  process.exit(0);

});