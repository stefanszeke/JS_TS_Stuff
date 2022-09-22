// what is a builder pattern?
// Builder pattern is a creational design pattern that lets you construct complex objects step by step.
// The pattern allows you to produce different types and representations of an object using the same construction code.

// when to use builder pattern?
// when you want to construct complex objects step by step.
// when you want to produce different types and representations of an object using the same construction code.

// what is a director?
// a director is a class that constructs an object using the builder interface

// what is a builder?
// a builder is an interface that specifies methods for creating the different parts of the product objects

// what is a product?
// a product is an object that is being built by the builder

import { Chef } from './chef';

const hawaiianPizza = Chef.makeHawaiianPizza();
const pepperoniPizza = Chef.makePepperoniPizza();

const americanHotDog = Chef.makeAmericanHotDog();


console.log(hawaiianPizza);
console.log(pepperoniPizza);
console.log(americanHotDog);