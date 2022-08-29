import {performance} from 'perf_hooks';

// memoization is a technique to speed up the execution of a function by caching the results of previous invocations.




// classic fibonacci
// with a big O of O(2^n), because it is exponential, it is very slow.
// in each step, we call the function two time more, then the previous step.

const getFibonacci = (n: number): number => {
  if (n < 2) {
    return n;
  }
  return getFibonacci(n - 1) + getFibonacci(n - 2);
}


// more efficient memoized fibonacci
const memoizedFibonacci = (n: number): number => {
  const memo: number[] = [];
  return memoizedFibonacciHelper(n, memo);
}

const memoizedFibonacciHelper = (n: number, memo: number[]): number => {
  if (n < 2) {
    return n;
  }
  if (memo[n]) {
    return memo[n];
  }
  memo[n] = memoizedFibonacciHelper(n - 1, memo) + memoizedFibonacciHelper(n - 2, memo);
  return memo[n];
}

// memoizedFibonacci - ~1.5 ms
const start1: number = performance.now();
console.log(memoizedFibonacci(45));
const end1: number = performance.now();
console.log(`fibonacci:  ${end1 - start1}ms`)

// getFibonacci - ~11000 ms
const start2: number = performance.now();
console.log(getFibonacci(45));
const end2: number = performance.now();
console.log(`fibonacci:  ${end2 - start2}ms`)



// 
const fib2 = (n: number, cache: number[] = []): number => {
  if (n < 2)return n;
  
  if (cache[n]) return cache[n];
  
  cache[n] = fib2(n - 1, cache) + fib2(n - 2, cache);
  return cache[n];
}

const start3: number = performance.now();
console.log(fib2(45));
const end3: number = performance.now();
console.log(`fibonacci:  ${end3 - start3}ms`)




