// difference between forEach, map, find
// forEach: no return value, no break
// map: return value, no break
// find: return value, break

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// forEach
arr.forEach((item, index) => {
  console.log(item*index);
})

// map
const newArr = arr.map((item, index) => {
  return item * 2;
})

console.log(newArr);

// find
const findItem = arr.find((item, index) => {
  return item === 5;
})

console.log(findItem);



