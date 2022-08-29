import {performance} from 'perf_hooks';

// classic fibonacci
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
console.log(getFibonacci(0));
const end2: number = performance.now();
console.log(`fibonacci:  ${end2 - start2}ms`)