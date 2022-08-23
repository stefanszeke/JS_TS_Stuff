import { Pizza, PizzaBuilder } from "./pizzaBuilder";
import { HotDog, HotDogBuilder } from "./hotDogBuilder";

const testPizza = new PizzaBuilder()
  .addCheese()
  .addOlives()
  .addTomatoes()
  .addPineapple()

// Chef is a director
export class Chef {

  makePepperoniPizza(): Pizza {
    const pizza = new PizzaBuilder()
      .addPepperoni()
      .addPepperoni()
      .addTomatoes()
      .getPizza();
    return pizza;
  }

  makeHawaiianPizza(): Pizza {
    const pizza = new PizzaBuilder()
      .addCheese()
      .addPepperoni()
      .addTomatoes()
      .addPineapple()
      .getPizza();
    return pizza;
  }

  makeAmericanHotDog(): HotDog {
    const hotDog = new HotDogBuilder()
      .addKetchup()
      .addMustard()
      .getHotDog();
    return hotDog;
  }

  makeMexicanHotDog(): HotDog {
    const hotDog = new HotDogBuilder()
      .addKetchup()
      .addMustard()
      .addOnions()
      .addTomatoes()
      .addLettuce()
      .getHotDog();
    return hotDog;
  }
}