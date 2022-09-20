// javascript every method


// example 

const isBelow40 = (currentValue) => currentValue < 40;
const isAbove10 = (currentValue) => currentValue > 10;
const isEven = (currentValue) => currentValue % 2 === 0;

const array1 = [5, 30, 39, 29, 12, 13, 50];

let filtered1 = array1.filter(isBelow40).filter(isAbove10).filter(isEven);
console.log(filtered1)





// if every filter returns true, then the item is added to the new array

let filters = [isBelow40,isAbove10,isEven]

let filtered2 = array1.filter(number => filters.every(filter => filter(number)))
console.log(filtered2)




