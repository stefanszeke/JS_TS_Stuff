// abstract factory
// is a factory that creates other factories
const readline = require('readline');
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class HotDrink {
  consume() {} // abstract method
}

class Tea extends HotDrink {
  consume() {
    console.log('This tea is nice with lemon!');
  }
}

class Coffee extends HotDrink {
  consume() {
    console.log('This coffee is delicious!');
  }
}

class HotDrinkFactory {
  prepare(amount) {} // abstract method
}

class TeaFactory extends HotDrinkFactory {
  prepare(amount) {
    console.log(`Add Tea leaves, boil water, pour ${amount} ml, add lemon, enjoy!`);
    return new Tea();
  }
}

class CoffeeFactory extends HotDrinkFactory {
  prepare(amount) {
    console.log(`Grind some beans, boil water, pour ${amount} ml, add cream and sugar, enjoy!`);
    return new Coffee();
  }
}

// factories enumarated , each key represents a factory
let AvailableDrink = Object.freeze({
  coffee: CoffeeFactory,
  tea: TeaFactory
});

class HotDrinkMachine {

  constructor() {
    this.factories = {};
    for (let drink in AvailableDrink) {
      this.factories[drink] = new AvailableDrink[drink]();
    }
  }

  interact(consumer) {
    rl.question('Please specify drink and amount (e.g., tea 50): ', answer => {
      let parts = answer.split(' ');
      let name = parts[0];
      let amount = +parts[1];
      let d = this.factories[name].prepare(amount);
      rl.close();
      consumer(d);
    });
  }

  makeDrink(type) {
    switch (type) {
      case 'tea':
        return new TeaFactory().prepare(200);
      case 'coffee':
        return new CoffeeFactory().prepare(50);
      default:
        throw new Error(`Don't know how to make ${type}`);
    }
  }
}

let machine = new HotDrinkMachine();
// rl.question("which drink would you like? ", answer => {
//   let drink = machine.makeDrink(answer);
//   drink.consume();
//   rl.close();
// })

machine.interact(drink => {
  drink.consume();
});