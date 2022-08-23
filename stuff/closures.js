for(var i = 0; i < 3; i++) {

  const log = () => {
    console.log(i);
  }

  setTimeout(log, 1000);
}

// closure example
function makeAdder(x) {
  return function(y) {
    return x + y;
  };
}

function sumMultiplier(x) {
  return function(a,b) {
    return (a + b) * x;
  }
}

let sumMultiplierBy10 = sumMultiplier(10);
console.log(sumMultiplierBy10(10,20));