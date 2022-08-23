
// WHAT IS ARRAY DESTRUCTURING?
// Array destructuring is a way to extract data from an array and assign it to variables in one go.


// array destructuring
const fruits = ['apple', 'banana', 'orange'];
const [first, second, third] = fruits;
console.log(first, second, third);

const [firstName, age] = ['John', 25];
console.log(firstName, age);

const [,,fruit] = fruits
console.log(fruit);



// object destructuring
const request = {
  body: {
    name: 'John',
    email: 'John@gmail.com',
    password: '123456'
  }

}
// const name = request.body.name
// const email = request.body.email
// const password = request.body.password

// Destructuring
const {name, email, password} = request.body
console.log(name, email, password)


const {body: {name: userName}} = request
console.log(userName)