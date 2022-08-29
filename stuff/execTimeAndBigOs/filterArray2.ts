import {performance} from 'perf_hooks';

let array1:number[] = []
for(let i = 0; i < 1000000; i++) {
    array1.push(i);
}
for(let i = 0; i < 1000000; i++) {
    array1.push(i);
}

let filter = [1, 2, 200, 300 ,400 ,5000, 75000, 2000000, 350000, 750000,555,600,850000,450600];

const filterArray2 = (array: number[], filter: number[]) => {
    return array.filter(item => filter.includes(item));
}

// measure execution time of filterArray2

const start: number = performance.now();
let array2 = filterArray2(array1, filter);
const end: number = performance.now();

console.log(array2)
console.log(`filter array2: ${end - start}ms`); // time: 43ms

