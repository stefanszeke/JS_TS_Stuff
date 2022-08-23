
let foo = function bar() { 
  console.log(typeof bar);
  return 12; 
};

foo()

try {
  typeof bar();
} catch (error) {console.log(error)}
