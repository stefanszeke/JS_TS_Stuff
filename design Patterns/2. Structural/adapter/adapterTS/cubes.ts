// what is and adapter pattern?
// Adapter pattern is a structural design pattern that allows objects with incompatible interfaces to collaborate.

// when to use adapter pattern?
// when you want to use an existing class, and its interface does not match the one you need.


// the adaptee interface, incompatible with the client
interface IImperials {
  volume(a: number): string;
  getSideLength(): number;
}

// the adaptee, returns the volume in inches as a string,
// the client needs it in centimeters as a number
class CubeImperial implements IImperials {
  constructor(private sideLength: number) {}
  public volume(a: number): string {
      return a**3 + ' inches³';
  }
  getSideLength(): number {
    return this.sideLength;
  }
}

// the target interface, used by the client
interface IMetrics {
  volume(a: number): number;
  getSideLength(): number;
}

// the adapter, makes the adaptees interface compatible with the targets interface
class Adapter implements IMetrics {

  constructor(private imperial: CubeImperial) {}

  public volume(a: number):number {
    const result = +this.imperial.volume(a).replace(/inches³/,"") * 2.54**3;
    return +result.toFixed(2);
  }
  getSideLength(): number {
    return this.imperial.getSideLength();
  }
}

// the client, uses the target interface
const clientCode = (target: IMetrics): string => {
  return target.volume(target.getSideLength()) + ' cm³';
}

const imperial = new CubeImperial(2);
const adapter = new Adapter(imperial);

console.log(clientCode(adapter));
