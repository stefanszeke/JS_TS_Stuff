import {performance} from 'perf_hooks';

let array1:number[] = []
for(let i = 0; i < 1000000; i++) {
    array1.push(i);
}
for(let i = 0; i < 1000000; i++) {
    array1.push(i);
}

let filter = [1, 2, 200, 300 ,400 ,5000, 75000, 2000000, 350000, 750000,555,600,850000,450600];


const filterArray1 = (array: number[], filter: number[]) => {
  let result: number[] = [];
  for(let n of array1) {
    for(let f of filter) {
      if(n === f) {
        result.push(n);
      }
    }
  }
  return result;
}

// measure execution time of filterArray1

const start: number = performance.now();
let array2 = filterArray1(array1, filter);
const end: number = performance.now();

console.log(array2)
console.log(`filter array1:  ${end - start}ms`); // time: 55 ms

