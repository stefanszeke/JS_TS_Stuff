const  numbersCallback = (numbers: number[], callback: any) => numbers.map(callback);

const multiplyByTwo = (number: number) => number * 2;
const addTen = (number: number) => number + 10;

const numbers = [1, 2, 3, 4, 5];

const result1 = numbersCallback(numbers, multiplyByTwo);
const result2 = numbersCallback(numbers, addTen);

console.log(result1);
console.log(result2);

// make a promise
const  numbersPromise = (numbers: number[]): Promise<number[]> => {
   return new Promise((resolve, reject) => resolve(numbers)
)}


// call the promise
(async() => {
    const result: number[] = await numbersPromise(numbers);
    const result1 = numbersCallback(result, multiplyByTwo);
    const result2 = numbersCallback(result, addTen);
    console.log(result1);
    console.log(result2);
})();



