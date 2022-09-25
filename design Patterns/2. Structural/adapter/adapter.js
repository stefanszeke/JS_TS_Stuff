// adapter pattern is a structural design pattern that allows objects with incompatible interfaces to collaborate.
// The adapter pattern is often used to make existing classes work with others without modifying their source code.
// The adapter pattern is also known as the wrapper pattern.

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    toString() {
      return `(${this.x}, ${this.y})`;
    }
}

class Line {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    toString() {
      return `(${this.start.toString()} -> ${this.end.toString()})`;
    }
}

class VectorObject extends Array {}

class VectorRectangle extends VectorObject {
    constructor(x, y, width, height) {
        super();
        this.push(new Line(new Point(x, y), new Point(x + width, y)));
        this.push(new Line(new Point(x + width, y), new Point(x + width, y + height)));
        this.push(new Line(new Point(x, y), new Point(x, y + height)));
        this.push(new Line(new Point(x, y + height), new Point(x + width, y + height)));
    }
}


// you have to work with a legacy code that you can't change
// drawPoint function can only draw points
// but you have to draw vector objects
let drawPoint = function (point) {
    process.stdout.write(".");
}

drawPoint();


let vectorObjects = [
  new VectorRectangle(1, 1, 10, 10),
  new VectorRectangle(3, 3, 6, 6)
];

class lineToPointAdapter extends Array {

  constructor(line) {
    super()

    this.hash = JSON.stringify(line)
    if(lineToPointAdapter.cache[this.hash]) return 


    console.log(`${++lineToPointAdapter.count}: Generating points for line ${line.toString()} (no caching)`);
    let left = Math.min(line.start.x, line.end.x);
    let right = Math.max(line.start.x, line.end.x);
    let top = Math.min(line.start.y, line.end.y);
    let bottom = Math.max(line.start.y, line.end.y);

    let points = [];

    if (right - left === 0) {
      for (let y = top; y <= bottom; ++y) {
        points.push(new Point(left, y));
      }
    }
    else if (line.end.y - line.start.y === 0) {
      for (let x = left; x <= right; ++x) {
        points.push(new Point(x, top));
      }
    }

    lineToPointAdapter.cache[this.hash] = points;
  }

  get items() {
    return lineToPointAdapter.cache[this.hash]
  }
}
lineToPointAdapter.count = 0;
lineToPointAdapter.cache = {};

let draw = function () {
  for (let vectorObject of vectorObjects) {
    for (let line of vectorObject) {
      let adapter = new lineToPointAdapter(line);
      adapter.items.forEach(point => drawPoint(point));
    }
  }
}
draw()
draw()