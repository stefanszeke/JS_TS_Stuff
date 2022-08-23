// what is a closure ?
// a closure is a function that remembers its lexical scope even when the function is executed outside that lexical scope.

// when to use closures ?
// 1. when you want to create a private variable
// 2. when you want to create a private function
// 3. when you want to create a private function that can be called only once

// private variable example
function makeCounter() {
    var count = 0;
    return function() {
        return count++;
    }
}

const counter = makeCounter()
console.log(counter())
console.log(counter())
console.log(counter())


// private function example
function makePrivateFunction() {
    var privateFunction = function() {
        console.log('private function')
    }
    return function() {
        privateFunction()
    }
}

const myPrivateFunction = makePrivateFunction()
myPrivateFunction()
myPrivateFunction()


// private function that can be called only once
function makePrivateFunctionThatCanBeCalledOnlyOnce() {
    var privateFunction = function() {
        console.log('private function')
    }
    var called = false
    return function() {
        if (!called) {
            called = true
            privateFunction()
        }
    }
}

const test1 = makePrivateFunctionThatCanBeCalledOnlyOnce()
test1()
test1()


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