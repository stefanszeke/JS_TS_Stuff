export {}
// enum colors
enum colors {
    red = 'red',
    green = 'green',
    blue = 'blue'
}

enum sizes {
    small = 'small',
    medium = 'medium',
    large = 'large'
}


// interface specification
interface Specification<T> {
    isSatisfied(item: T): boolean;
}

// interface filter
interface Filter<T> {
    filter(items: T[], spec: Specification<T>): T[];
}

// class ColorSpecification
class ColorSpecification implements Specification<Product> {
    constructor(public color: colors) { }
    isSatisfied(item: Product) {
        return item.color === this.color;
    }
}

// class SizeSpecification
class SizeSpecification implements Specification<Product> {
    constructor(public size: sizes) { }
    isSatisfied(item: Product) {
        return item.size === this.size;
    }
}

// class Product
class Product {
    constructor(public name: string, public color: colors, public size: string) { }
}


// class BetterFilter
class BetterFilter implements Filter<Product> {
    filter(items: Product[], spec: Specification<Product>): Product[] {
        return items.filter(x => spec.isSatisfied(x));
    }
}

// class AndSpecification
class AndSpecification implements Specification<Product> {
    constructor(public specifications: Specification<Product>[]) { }
    isSatisfied(item: Product) {
        return this.specifications.every(x => x.isSatisfied(item));
    }
}

// class OrSpecification
class OrSpecification implements Specification<Product> {
    constructor(public specifications: Specification<Product>[]) { }
    isSatisfied(item: Product) {
        return this.specifications.some(x => x.isSatisfied(item));
    }
}

let apple = new Product("Apple", colors.green, sizes.small);
let tree = new Product("Tree", colors.green, sizes.large);
let house = new Product("House", colors.blue, sizes.large);
let cherry = new Product("Cherry", colors.red, sizes.small);
let redCar = new Product("Red Car", colors.red, sizes.large);
let blueCar = new Product("Blue Car", colors.blue, sizes.large);
let kiwi = new Product("Kiwi", colors.green, sizes.small);

let products = [apple, tree, house, cherry, redCar, blueCar, kiwi];

let bf = new BetterFilter();
let smallAndGreen = new AndSpecification([new ColorSpecification(colors.green), new SizeSpecification(sizes.small)]);

for (let p of bf.filter(products, smallAndGreen)) {
    console.log(` - ${p.name} is small and green`);
}

let smallOrGreen = new OrSpecification([new ColorSpecification(colors.green), new SizeSpecification(sizes.small)]);
for (let p of bf.filter(products, smallOrGreen)) {
    console.log(` - ${p.name} is small or green`);
}