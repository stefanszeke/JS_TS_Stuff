// factory design pattern
// is a creational design pattern that uses factory methods to deal with the problem of creating objects without having to specify the exact class of the object that will be created.

CoordinateSystem = {
  cartesian: 0,
  polar: 1
}

// cant have two constructors
// class  Point {
//   constructor (x, y) {
//     this.x = x;
//     this.y = y;
//   }

//   constructor(rho, theta) {
//     this.x = rho * Math.cos(theta);
//     this.y = rho * Math.sin(theta);
//   }
// }

// factory method to create points in a cartesian coordinate system or a polar coordinate system 
// not the best way to do it, because it is not extensible
// class Point {
//   constructor(a, b, cs = CoordinateSystem.cartesian) {
//     switch (cs) {
//       case CoordinateSystem.cartesian:
//         this.x = a;
//         this.y = b;
//         break;
//       case CoordinateSystem.polar:
//         this.x = a * Math.cos(b);
//         this.y = a * Math.sin(b);
//         break;
//     }
//   }
// }

// better way to do it
// here we have a factory method that returns a function that creates a point 
class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  static newCartesianPoint(x, y) {
    return new Point(x, y);
  }

  static newPolarPoint(rho, theta) {
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
  }
}


let p2 = Point.newPolarPoint(5, Math.PI / 2);

// Factory
class PointFactory {
  static newCartesianPoint(x, y) {
    return new Point(x, y);
  }

  static newPolarPoint(rho, theta) {
    return new Point(rho * Math.cos(theta), rho * Math.sin(theta));
  }
}

let p1 = PointFactory.newPolarPoint(2, 3);