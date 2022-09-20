let Color = Object.freeze({
    red: "red",
    green: "green",
    blue: "blue"
});

let Size = Object.freeze({
    small: "small",
    medium: "medium",
    large: "large",
});

class Product 
{
  constructor(name,color,size) 
  {
    this.name = name;
    this.color = color;
    this.size = size;
  }
};

class ProductFilter {
  filterByColor(products, color) {
    return products.filter(p => p.color === color);
  }

  filterBySize(products, size) {
    return products.filter(p => p.size === size);
  }

  filterBySizeAndColor(products, size, color) {
    return products.filter(p => p.size === size && p.color === color);
  }
}

let apple = new Product("Apple", Color.green, Size.small);
let tree = new Product("Tree", Color.green, Size.large);
let house = new Product("House", Color.blue, Size.large);
let cherry = new Product("Cherry", Color.red, Size.small);
let redCar = new Product("Red Car", Color.red, Size.large);
let blueCar = new Product("Blue Car", Color.blue, Size.large);
let kiwi = new Product("Kiwi", Color.green, Size.small);

let myProducts = [apple, tree, house, cherry, redCar, blueCar, kiwi];

let pf = new ProductFilter();

// green products (old)
for(let product of pf.filterByColor(myProducts, Color.green))
  console.log(`[${product.name} is green]`);

// large and red products (old)
for(let product of pf.filterBySizeAndColor(myProducts, Size.large, Color.red))
  console.log(`[${product.name} is large and red]`);

let GreenProducts = pf.filterByColor(myProducts, Color.green)
let smallGreenProducts = pf.filterBySize(GreenProducts, Size.small)
for(p of smallGreenProducts) console.log(p.name)

// open closed principle - open for extension, closed for modification
// what is the open closed principle?
// software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification
// what does this mean?
// you should be able to extend a classes behavior, without modifying it




// specification pattern
class ColorSpecification {
  constructor(color) { this.color = color }
  isSatisfied(item) { return item.color === this.color }
}

class SizeSpecification {
  constructor(size) { this.size = size }
  isSatisfied(item) { return item.size === this.size }
}


class newFilter {
  filter(items, specification) {
    return items.filter(item => specification.isSatisfied(item))
  }
}

let nf = new newFilter()

for(let product of nf.filter(myProducts, new ColorSpecification(Color.green)))
  console.log(`[${product.name} is green]`);

for(let product of nf.filter(myProducts, new SizeSpecification(Size.large)))
  console.log(`[${product.name} is large]`);

class AndSpecification {
  constructor(...specs) { this.specs = specs }
  isSatisfied(item) {
    return this.specs.every(x => x.isSatisfied(item))
  }
}

let smallAndGreen = new AndSpecification( new ColorSpecification(Color.green), new SizeSpecification(Size.small))

for(let product of nf.filter(myProducts, smallAndGreen))
  console.log(`[${product.name} is green and small]`);