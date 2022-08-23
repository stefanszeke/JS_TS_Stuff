// what is a promise?
// a promise is an object that represents the eventual completion or failure of an asynchronous operation
// a promise is in one of three possible states:
// 1. pending: initial state, neither fulfilled nor rejected
// 2. fulfilled: meaning that the operation was completed successfully
// 3. rejected: meaning that the operation failed

// what is async/await?
// async/await is a way to write asynchronous code that looks synchronous
// async/await is built on top of promises
// async/await is syntactic sugar for promises

const promiseFunction = (name:string) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(name);
    }, 500);
  });
};

const main = async () => {
  // await can only be used inside of an async function
  // await will pause the execution of the async function
  // and wait for the promise to resolve
  // await will return the resolved value of the promise
  let result = await promiseFunction("Bob");
  console.log(result);
};
main();

// what is the difference between a promise and an observable?
// a promise represents a single value at some point in the future
// an observable represents a stream of values over time


const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

const sayHello = (name:string) => {
  console.log(`Hello ${name}!`);
}

sleep(1000).then(() => sayHello('John'));



( async () => {
  await sleep(2000);
  sayHello('Jack');
})();

