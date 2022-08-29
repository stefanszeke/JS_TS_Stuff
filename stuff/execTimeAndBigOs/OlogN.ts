
// O(log n) logarithmic time complexity

function logFunc(n: number): string | void {
  if(n === 0) return console.log('done');
  n = Math.floor(n / 2);
  console.log(n);
  return logFunc(n);
}


logFunc(8);
// log base 2 of 8 is ~3
// logFunc(8) -> logFunc(4) -> logFunc(2) -> logFunc(1) -> done
// the function is called 3 times
// n is halved each time, thats why the time complexity is O(log n) = log base 2 of n


logFunc(100);
// log base 2 of 100 is ~6
// logFunc(100) -> logFunc(50) -> logFunc(25) -> logFunc(12) -> logFunc(6) -> logFunc(3) -> logFunc(1) -> done


logFunc(10000000000);
// log base 2 of 10000000000 is ~33
// the function is called 33 times
// 10000000000 is ten billion

// to get 10000000000 we need to raise 2 by the power of 33: 2^33 = 10000000000


// logN
function logN(n: number): void {
  const copyOfN = n
  let iterations = 0;
  while(n > 1) {
    n = Math.floor(n / 2);
    // console.log(n);
    iterations++;
  }
  return console.log(`[ LogN(${copyOfN}), done in ${iterations} iterations ]`);
}

logN(8);
logN(100);
logN(10000000000);