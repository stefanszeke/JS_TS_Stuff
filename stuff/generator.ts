export {}

// what is yield?
// yield is a keyword that pauses the generator function
// and returns the value to the caller
// the caller can then resume the generator function
// by calling next() on the generator object

// what is a generator?
// a generator is a function that can be paused and resumed
// a generator is a special type of function that works with the yield keyword
// a generator is a function that returns a generator object
// a generator is a function that returns an iterator

function* myGenerator(nums: number[]) {

  for(let num of nums) {
    yield num;
  }
}

let myGen = myGenerator([1, 2, 3]);
let result1 = myGen.next();
let result2 = myGen.next();
let result3 = myGen.next();
let result4 = myGen.next();

console.log(result3);