class Rectangle {
    constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get width() { return this._width; }
    set width(value) { this._width = value; }

    get height() { return this._height; }
    set height(value) { this._height = value; }

    get area() {
        return this._width * this._height;
    }

    get isSquare() {
      return this._width === this._height;
    }

    toString() {
        return `${this._width} x ${this._height} = ${this.area}`;
    }

}

let rc = new Rectangle(2, 3);
console.log(rc.toString());

class Square extends Rectangle {
    constructor(size) {
        super(size, size);
    }

    set width(value) {
        this._width = this._height = value;
    }
    set height(value) {
        this._width = this._height = value;
    }
}

let sq = new Square(5);
console.log(sq.toString());

sq.width = 8;
console.log(sq.toString());

let useIt = (rc) => {
  let width = rc._width;
  rc.height = 10;
  return (`Expected area of ${width * 10}, got ${rc.area}`);
}

console.log(useIt(rc));
console.log(useIt(sq));

// Liskov Substitution Principle
// we have a Rectangle class and a Square class
// the Square class is a subclass of Rectangle
// the Square class overrides the width and height setters
// the Square class violates the Liskov Substitution Principle, because the useIt function expects a Rectangle object
// the Liskov Substitution Principle states that
// "objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program"
