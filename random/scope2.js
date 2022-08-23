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