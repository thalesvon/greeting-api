// __tests__/index.test.js
const index = require('../index');

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }

const cities = ["Brasilia", "Dublin", "Munich", "Cork"];
const times = ["moring","afternoon", "evening"];
const days = ["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"];
const names = ["Jarbas","Ragnar","Price","Cacau","Elvis","Rolda"];

const eventOptions = {
    "headers":{
        "day":days[getRandomInt(0,6)]
    },
    "body": "{ \"callerName\": \""+names[getRandomInt(0,5)]+"\" }",
    "queryStringParameters": {
        "time": times[getRandomInt(0,2)]
    },
    "pathParameters": {
        "city": cities[getRandomInt(0,3)]
    }
    };

test('correct greeting is generated', () => {
    expect(index.handler(eventOptions));
    });
  