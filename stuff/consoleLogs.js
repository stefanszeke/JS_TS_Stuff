// 'use strict';

let myObject = {
  foo: 'bar',
  func: function() {
    let self = this;
    console.log('outer func:  this.foo = ' + this.foo);
    console.log('outer func:  self.foo = ' + self.foo);
    (function() {
      console.log('inner func:  this.foo = ' + this.foo);
      console.log('inner func:  self.foo = ' + self.foo);
    })();
  }
};
myObject.func();

let c = undefined;

(function() {
  let a = (b = 3);
})();

console.log('a defined? ' + (typeof a !== 'undefined'));
console.log('b defined? ' + (typeof b !== 'undefined'));
if(c === undefined) {
  console.log(b);
}





let callbacks = [];
for (let i = 0; i < 5; ++i) {
  callbacks.push(function(input) { console.log(i + input); });
}
callbacks[0]("test");
callbacks.forEach( func => func(" dog"));






let key = 'person';
let test = 'age';
let age = 40

let data = {
  [key]: 'John Smith',
  test: 'test key',
  [test]: age
};

console.log(data.key);
console.log(data.person);
console.log(data.test);
console.log(data.age);







