// what is Bog O notation?
// Big O notation is a mathematical notation for describing the performance of a function.
// It is used to describe the worst-case performance of a function.

// types of Big O notation:
// O(1) - constant time
// O(log n) - logarithmic time
// O(n) - linear time
// O(n log n) - logarithmic time
// O(n^2) - quadratic time
// O(n^3) - cubic time
// O(2^n) - exponential time
// O(n!) - factorial time
// O(n^n) - polynomial time

// 0(1) - constant time example:

function add(a: number, b: number): number {
    return a + b;
}
console.log(add(1, 2)); // 3

// 0(log n) - logarithmic time example:

function binarySearch(array:number[], target:number) {
    array.sort((a, b) => a - b);
    console.log(array);
    let low: number = 0;
    let mid: number;
    let high: number = array.length - 1;
    
    while(low <= high) {
      mid = Math.floor((low + high) / 2);
      
      console.log(mid)
      if(array[mid] === target) return true;
      else if(array[mid] > target) high = mid - 1;
      else low = mid + 1;
    }

    return false;
}
console.log(binarySearch([3, 2, 1, 4, 10, 6, 9, 8, 7, 5], 4))

// 0(n) - linear time example:

function linearSearch(array: number[], target: number) {
    for(let i = 0; i < array.length; i++) {
        if(array[i] === target) return true;
    }
    return false;
}
console.log(linearSearch([3, 2, 1, 4, 10, 6, 9, 8, 7, 5], 5))

// 0(n^2) - quadratic time example:

function quadraticSearch(array: number[], targets: number[]) {
  // true if every target is found in the array
  for(let target of targets) {
    if(!linearSearch(array, target)) return false;
  }

  return true;
}

console.log(quadraticSearch([3, 2, 1, 4, 10, 6, 9, 8, 7, 5,1], [2, 10, 5]))


