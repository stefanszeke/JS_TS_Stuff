export class HotDog {
  _toppings: string[] = [];
}

interface IHotDogBuilder {
  addKetchup(): this;
  addMustard(): this;
  addOnions(): this;
  addTomatoes(): this;
  addLettuce(): this;
}

export class HotDogBuilder implements IHotDogBuilder {
  private _hotDog: HotDog = new HotDog()

  addKetchup(): this { this._hotDog._toppings.push("ketchup"); return this; }
  addMustard(): this { this._hotDog._toppings.push("mustard"); return this; }
  addOnions(): this { this._hotDog._toppings.push("onions"); return this; }
  addTomatoes(): this { this._hotDog._toppings.push("tomatoes"); return this; }
  addLettuce(): this { this._hotDog._toppings.push("lettuce"); return this; }

  getHotDog(): HotDog {
    return this._hotDog;
  }

}
