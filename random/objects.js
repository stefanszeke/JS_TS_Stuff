const person = (name, age) => {
  return {name,age, introduce: () => `Hi, my name is ${name} and I am ${age} years old.`}
};

const person1 = person('John', 25);
console.log(person1);
console.log(person1.introduce());