let person = {
    name: 'John',
    age: 30
}

console.log(person);

// check if the object has a property
console.log(person.hasOwnProperty('name'));

// check if object has key height
console.log(person.hasOwnProperty('height'));
console.log("height" in person);

let person2 = Object.create(person, {"height": {value: 1.75}});
console.log(person2);
console.log(person2.name);
console.log(person2.height);

console.log(person2.hasOwnProperty('height'));

console.log(person2.hasOwnProperty('age'));
console.log('age' in person2);


