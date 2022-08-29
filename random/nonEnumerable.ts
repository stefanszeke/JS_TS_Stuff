export {}

// non enumerable properties
var person = {
    name: 'John',
    age: 30
};
Object.defineProperty(person, 'name', {
    enumerable: false
});
console.log(Object.keys(person));

// when to use non enumerable properties?
// - when you want to hide a property from the for...in loop