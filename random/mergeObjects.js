let person = {
    name: 'John',
    age: 30,
};

let address = {
    city: 'New York',
    country: 'USA',
    street: '123 Main St',
}

function mergeObjects(obj1, obj2) {
    return Object.assign(obj1, obj2);
}

function mergeObjects2(obj1, obj2) {
    return {...obj1, ...obj2};
}

console.log(mergeObjects2(person, address));
console.log(person);
console.log(address);

// let personWithAddress = mergeObjects(person, address);

// console.log(personWithAddress);
