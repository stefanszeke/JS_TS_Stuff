const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

const sayHello = (name:string) => {
  console.log(`Hello ${name}!`);
}

sleep(1000).then(() => sayHello('John'));



( async () => {
  await sleep(2000);
  sayHello('Jack');
})();

