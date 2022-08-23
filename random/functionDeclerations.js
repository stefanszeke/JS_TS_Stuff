

// difference between run-time vs parse-time function declaration 
// is that the function expression is not hoisted

try {
  console.log(add2(1, 2));
  console.log(add1(1, 2));
} catch (error) { console.log(error) }

// function expression run-time declaration
let add1 = (a, b) => {
    return a + b;
}

// function statement parse-time declaration
function add2(a, b) {
    return a + b;
}

console.log(add2(1, 2));
console.log(add1(1, 2));

////
console.log('[functions call order]:')

try {

  bar();

  (function abc(){console.log('1')})(); // IIFE

  const xyz = () => console.log("2") // function expression
  
  xyz()

  function bar(){console.log('3')};  // function statement


} catch(err) { console.log(err) }

