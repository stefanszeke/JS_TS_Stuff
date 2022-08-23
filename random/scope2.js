// what is the difference between function scope and block scope?
// function scope is the scope of a variable that is defined inside a function.
// block scope is the scope of a variable that is defined inside a block.
// block scope is a subset of function scope.
// block scope is introduced in ES6.
// block scope is introduced by let and const keywords.
// block scope is not introduced by var keyword.
// block scope is introduced by {} curly braces.

// function scope example
function scopeExample() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log(x);
  }
  console.log(x);
}


scopeExample();

try {
  console.log(x)
} catch (e) {
  console.log(e);
}


// block scope example
function blockScopeExample() {
  let x = 1;
  if (true) {
    let x = 2;
    console.log(x);
  }
  console.log(x);
}

blockScopeExample();


try {
   var x;
   console.log(x);
   x = 1


} catch (error) {
  console.log(error);
}