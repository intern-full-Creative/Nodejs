// JSON.stringify will convert a javascript object to a json text.
const obj1 = {
  name: "john",
  age: 30,
  city: "Tvm",
};

const jsonText = JSON.stringify(obj1);
console.log(jsonText);

const obj2 = ["john", 30, "tvm"];

const jsonArray = JSON.stringify(obj2);
console.log(jsonArray);
