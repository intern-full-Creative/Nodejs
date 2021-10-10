// JSON.parse will convert a json text into a javascript object.
const jsonObj = '{"name": "John", "age": 30, "city": "Tvm"}';

const obj1 = JSON.parse(jsonObj);
console.log(obj1);

// JSON.parse will also convert a json arry into a javascript array.
const jsonArray = '["john", 30, "Tvm"]';

const obj2 = JSON.parse(jsonArray);
console.log(obj2);
