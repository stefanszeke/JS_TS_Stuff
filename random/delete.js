// what is delete?
// delete is a keyword in javascript
// delete is used to delete a property from an object
// delete is used to delete a variable
// delete is used to delete an element from an array

const console = require("console");

// delete is not used to delete an object
// delete is not used to delete an array

// delete example 1

var obj = {a: 1, b: 2, c: 3};
delete obj.b;
console.log(obj);

// delete example 2

var arr = [1, 2, 3];
delete arr[1];
console.log(arr);

// delete example 3

var x = 1;
var output = (function() {
  delete x;
  return x;
})();

console.log(output);

var y = {a: 1, b: 2, c: 3};
var output2 = (function() {
  delete x.a;
  return x.a;
})();

console.log(output2);
console.log(y)

let z = Object.create(y, {d: {value: 4}});

console.log(z)
console.log(z.a)
console.log(z.d)
delete z.a
console.log(z.a)
console.log(z.hasOwnProperty('a'))
console.log(z.hasOwnProperty('d'))
delete z.d
console.log(z.d)
z.d = 5
console.log(z.d)

let myArray = [1, 2, 3, 4, 5];
console.log(myArray.length);
delete myArray[3];
console.log(myArray.length);
console.log(myArray);
