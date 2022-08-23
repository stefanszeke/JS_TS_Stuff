// function printCallInfo() {
//   console.log(`To call ${this.country}, dial +${this.callCode}!`);
// }

// let data = { country: 'Hungary', callCode: 36 };
// printCallInfo.call(data);


const Jack = {
  name: 'John',
  age: 30,
  printInfo: function(hobby: string, food: string) {
    console.log(`My name is ${this.name} and I'm ${this.age} years old. I like ${hobby} and ${food}.`);
  }
}

let Jill = {
  name: 'Jill',
  age: 25,
}

console.log(`[call] [apply]`)
Jack.printInfo.call(Jill, 'reading', 'pizza');
Jack.printInfo.apply(Jill, ['reading', 'pizza']);


console.log(`[bind]`)
let saveJill = Jack.printInfo.bind(Jill, 'running', 'salad');
Jill = {name: "Julia", age: 30}
Jack.printInfo.apply(Jill, ['reading', 'pizza']);

saveJill();

