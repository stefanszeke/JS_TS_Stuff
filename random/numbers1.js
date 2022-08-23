// what is NaN?
// NaN is a special value in JavaScript that means "Not a Number".

// when to ise NaN?
// NaN is used to indicate that a number is not a legal number.

// what is isNan()?
// The isNaN() function determines whether a value is an illegal number (Not-a-Number).

// example of isNaN()
var y = 100 / "Apple";
console.log(isNaN(y)); // returns true because x is Not a Number

// difference between typeof and isNaN()
// The typeof operator returns "number" for NaN values:
console.log(typeof NaN); // returns "number"


console.log(isNaN(NaN)); // returns true

// typeof 'number' vs isNaN()
let testInputs = [1,"1", NaN]
testInputs.forEach(input => {
  console.log(`typeof ${input} is ${typeof input}`)
  console.log(`isNaN ${input} is ${isNaN(input)}`)
})

// isNaN false if string is a number
console.log(isNaN("10")); // returns false




let x = NaN
if( x <= 100 ) {console.log("1. x is less than or equal to 100")}
if( !(x > 100) ) {console.log("2. x is less than or equal to 100")}

// NaN is not equal to anything
if( x == NaN ) {console.log("3. x is equal to NaN")}
if( x === NaN ) {console.log("4. x is equal to NaN")}
if( x != NaN ) {console.log("5. x is not equal to NaN")}
if( x !== NaN ) {console.log("6. x is not equal to NaN")}
if(!(x > NaN)) {console.log("7. !(false) === true")}


