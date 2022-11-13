const username = [
  "NFury",
  "TStark",
  "SRogers",
  "NRomanoff",
  "TOdinsson",
  "RRacoon",
  "Logan3",
  "MMorales",
  "CableGuy",
  "Modock",
  "HulkSmash",
  "ProfX",
  "EricIsBest",
  "MagnetoWasRight",
  "MorbinTime",
  "SStorm",
  "BWayne",
  "Chief117",
  "CaptainKirk",
  "LordStark",
  "Mikethefourth",
  "Andyistheking",
  "Kimtastic",
  "Devursla",
  "Queenvictoria",
  "tonyrulz",
  "Stacey616",
];

const email = [
  "gilmoure@optonline.net",
  "ilyaz@verizon.net",
  "grolschie@att.net",
  "jgmyers@icloud.com",
  "hellfire@yahoo.com",
  "jginspace@me.com",
  "skajan@yahoo.caqmacro@comcast.net",
  "magusnet@verizon.net",
  "thrymm@hotmail.com",
  "frode@sbcglobal.net",
  "gamma@comcast.net",
  "jsbach@outlook.com",
  "wayward@outlook.com",
  "microfab@me.com",
  "arathi@comcast.net",
  "lpalmer@verizon.net",
  "andersbr@verizon.net",
  "preneel@att.net",
  "kwilliams@comcast.net",
  "mrsam@mac.com",
  "dalamb@outlook.com",
  "rohitm@mac.com",
  "rcwil@verizon.net",
  "wsnyder@gmail.com",
  "jrifkin@hotmail.com",
  "dinther@optonline.net",
];

const thoughtText = [
    'Decision Trackers are awesome',
    'Find My Phone is a useful app',
    'Learn Piano is not very good for learning Piano',
    'Starbase Defender is a great game, I love it',
    'Tower Defense is okay',
    'Monopoly Money is better than real money IMO',
    'Movie trailers are just the best parts of a movie distilled into 90 seconds',
    'Hello world, this is a comment',
    'Social media is a big waste of time',
    'Notes is my most used app',
    'Messages is open on my computer 24/7',
    'Email is open on my computer',
    'Compass is never opened',
    'Firefox is great for privacy',
    'I hate that feeling which you get from being drunk, I hate it so much. I hate how I cant focus, how I cant think with clear mind, as if Im losing myself.',
    'Yeah and just when I thought it cant get any worse I started to bald, funny isnt it?',
    'Why we always talk about the weather? Lets talk about something more interesting, please.',
    'Too much free time can be harmful, you need to waste your energy somewhere.',
    'What I love the most about 9GAG? Community and their comments, of course, they are so funny',
    'Best way to spend your time is to take a walk in the woods, it brings peace of mind and you feel rejuvenated.',
    'Just think about it, imagine every opportunity and let me know your answer after that, okay?',
    'I wonder what John McAfee is going to do about his Bitcoin promise : D',
    'My skills are pretty bad in gaming, I dont have a fast response and I make mistakes often, sry to disappoint you guys.',
    'I need really high quality sleep, 10 hours or so would be nice : D',
    'There are a couple of sounds that can actually decrease stress level, the sound of a heartbeat, the sound of rain and other natural sounds.',
    'How fast do you read usually? It takes me a while because my eyes are kind of problematic, but I still read a lot.',
    'I love strategy games, no, I admire strategy games, everything about strategy games is awesome.',
    'I wonder what Earth will look like in 50 years or so, what kind of technologies we will have...',
  ];

  const users = [];

  // Get a random item given an array
  const genRandomIndex = (arr) => Math.floor(Math.random() * arr.length);

  // Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random username
const getRandomUsername = () =>
  `${getRandomArrItem(username)}`;

  // Gets a random username
const getRandomEmail = () =>
`${getRandomArrItem(email)}`;

// Gets a random thoughts
const getRandomThoughts = () =>
  `${getRandomArrItem(thoughtText)}`;



console.log(getRandomUsername)
console.log('hello')

module.exports = { getRandomUsername, getRandomEmail, getRandomArrItem, getRandomThoughts };
