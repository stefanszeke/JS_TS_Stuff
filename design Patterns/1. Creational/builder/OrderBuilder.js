class OneOrder {

  itemList = []

  constructor() {
    this.soup = "";
    this.main = "";
    this.drink = "";
    this.dessert = "";
  }

  toString() {
    let order = []
    if(this.soup && this.main) order.push(`${this.soup} and ${this.main}`);
    else if(this.soup) order.push(this.soup);
    else if(this.main) order.push(this.main);

    if(this.drink) {
      if(this.dessert && (!this.soup && !this.main)) order.push(`${this.dessert} with ${this.drink}`);
      else {
        if(this.soup || this.main) order.push(`with ${this.drink}`);
        else order.push(this.drink);

      }
    }

    if(this.dessert && (!(this.drink && !this.soup && !this.main))) { 
      if(this.soup || this.main) order.push(`and ${this.dessert} for dessert`);
      else order.push(this.dessert);
    }

    return order.join(" ");
  }
    

  testMethod() {
    return "test";
  }

}

class OneOrderBuilder {
  constructor(order = new OneOrder()) {
    this.order = order;
  }

  get soup() {
    return new SoupBuilder(this.order);
  }

  get main() {
    return new MainBuilder(this.order);
  }

  get drink() {
    return new DrinkBuilder(this.order);
  }

  get dessert() {
    return new DessertBuilder(this.order);
  }

  build() {
    return this.order;
  }
}

class SoupBuilder extends OneOrderBuilder {
  constructor(order) {
    super(order);
  }
  peasSoup() {
    this.order.soup = 'Peas Soup';
    this.order.itemList[0] = 'Peas Soup';
    return this;
  }

  tomatoSoup() {
    this.order.soup = 'Tomato Soup';
    this.order.itemList[0] = 'Tomato Soup';
    return this;
  }
}

class MainBuilder extends OneOrderBuilder {
  constructor(order) {
    super(order);
  }
  chicken() {
    this.order.main = 'Chicken';
    this.order.itemList[1] = 'Chicken';
    return this;
  }

  beef() {
    this.order.main = 'Beef';
    this.order.itemList[1] = 'Beef';
    return this;
  }
}

class DrinkBuilder extends OneOrderBuilder {
  constructor(order) {
    super(order);
  }
  coke() {
    this.order.drink = 'Coke';
    this.order.itemList[2] = 'Coke';
    return this;
  }

  water() {
    this.order.drink = 'Water';
    this.order.itemList[2] = 'Water';
    return this;
  }
}

class DessertBuilder extends OneOrderBuilder {
  constructor(order) {
    super(order);
  }
  iceCream() {
    this.order.dessert = 'Ice Cream';
    this.order.itemList[3] = 'Ice Cream';
    return this;
  }

  cake() {
    this.order.dessert = 'Cake';
    this.order.itemList[3] = 'Cake';
    return this;
  }
}

class MainOrder {
  constructor() {
    this.MainOrders = [];
  }

  addOrder() {
    let oneOrder = new OneOrderBuilder();
    this.MainOrders.push(oneOrder);
    return oneOrder;
  }

  toString() {
    let stringOrder = []
    this.MainOrders.forEach((oneOrder,index) => {
      stringOrder.push(`Order ${index+1}: ${oneOrder.order.toString()}`);
    })
    return "\nnew order:\n"+stringOrder.join("\n");
  }

  getEach() {   
    let orderCount = {}
    this.MainOrders.forEach((oneOrder) => {

      oneOrder.order.itemList.forEach((item) => {
        if(item) {
          if(orderCount[item]) orderCount[item]++;
          else orderCount[item] = 1;
        }
      })
    })
    let orderCountArray = Array.from(Object.entries(orderCount))
    orderCountArray.sort((a,b) => b[1] - a[1])
    
    return "\nnew order each:\n"+orderCountArray.map((item) => `${item[0]}: ${item[1]}x`).join("\n");
  }

  get thisObject() {
    return this.MainOrders
  }

}

let order1 = new MainOrder();

order1.addOrder().soup.peasSoup().main.chicken().drink.coke().dessert.iceCream().build()
order1.addOrder().soup.tomatoSoup().main.beef().drink.water().build();
order1.addOrder().drink.coke().build()
order1.addOrder().main.chicken().dessert.cake().build()
order1.addOrder().soup.peasSoup().drink.coke().build()
order1.addOrder().dessert.cake().build()
order1.addOrder().drink.coke().dessert.iceCream().build()

console.log(order1.toString());
console.log(order1.getEach());

console.log(order1.thisObject);

