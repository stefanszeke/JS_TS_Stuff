class Person {
  
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }

}

const person = new Person('John', 25);
person.sayHello();

person.salary = 1000;

console.log(person.salary);

Person.prototype.sayGoodbye = function() {
  console.log(`Goodbye, my name is ${this.name} and I am ${this.age} years old.`);
}

person.sayGoodbye();

// Object seal method, is used for sealing an object, which means that you can't add new properties to the object, but you can change the existing properties.
Object.seal(person);

person.location = 'USA';
console.log(person.location);

// Object freeze method, is used for freezing an object, which means that you can't add new properties to the object, and you can't change the existing properties.
Object.freeze(person);

person.age = 30;
console.log(person.age);



