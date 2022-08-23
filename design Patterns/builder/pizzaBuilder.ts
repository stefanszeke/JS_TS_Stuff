export class Pizza {
  _toppings: string[] = [];
}

interface IPizzaBuilder {
  addCheese(): this;
  addPepperoni(): this;
  addSausage(): this;
  addMushrooms(): this;
  addOlives(): this;
  addTomatoes(): this;
  addPineapple(): this;
}

// PizzaBuilder is a builder
export class PizzaBuilder implements IPizzaBuilder {
  private _pizza: Pizza = new Pizza();

  addCheese(): this {
    this._pizza._toppings.push("cheese");
    return this;
  }

  addPepperoni(): this {
    this._pizza._toppings.push("pepperoni");
    return this;
  }

  addSausage(): this {
    this._pizza._toppings.push("sausage");
    return this;
  }

  addMushrooms(): this {
    this._pizza._toppings.push("mushrooms");
    return this;
  }

  addOlives(): this {
    this._pizza._toppings.push("olives");
    return this;
  }

  addTomatoes(): this {
    this._pizza._toppings.push("tomatoes");
    return this;
  }

  addPineapple(): this {
    this._pizza._toppings.push("pineapple");
    return this;
  }

  getPizza(): Pizza {
    return this._pizza;
  }
  
}

