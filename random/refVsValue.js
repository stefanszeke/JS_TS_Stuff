// passed by reference, point to the same object in memory = objects, arrays, functions, etc.
let obj1 = {};
let obj2 = obj1;
obj2.x = 1;

console.log(obj1)

let arr1 = [];
let arr2 = arr1;
arr2.push(1);

console.log(arr1)

// passed by value, copy of the object in memory (deep copy) = numbers, strings, booleans, null, undefined, etc.
let num1 = 1;
let num2 = num1;
num2 = 10;

console.log(num1)

let str1 = "hello";
let str2 = str1;
str2 = "world";

console.log(str1)

let bool1 = true;
let bool2 = bool1;
bool2 = false;

console.log(bool1)

// deep copy of objects and arrays
let obj3 = {
    x: 1,
    y: {
        z: 1
    }
}

// ... wont copy nested objects
let obj4 = {...obj3};
obj4.x = 10;
obj4.y.z = 10;
console.log(obj3)

// ... will copy nested objects
let obj5 = JSON.parse(JSON.stringify(obj3));
obj5.y.z = 50;

console.log(obj3)

// arrays 
let arr3 = [1, 2, 3];
let arr4 = [...arr3];
let arr5 = arr3.slice()

arr4[0] = 80;
arr5[1] = 90

console.log(arr3)

