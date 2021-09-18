const names = require("./names");
const sayHi = require("./sayhi");

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);

// alternative way
const data = require("./alternative_way");

console.log(data.person.name);

// Auto invoking function
require("./auto-invoking");
