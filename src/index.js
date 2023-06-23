const _ = require('lodash');
const { MyMath } = require('./MyMath');
require('./style.css');

console.log(2 + 2);

const randomNumber = _.random(0, 5000);

console.log(randomNumber);
