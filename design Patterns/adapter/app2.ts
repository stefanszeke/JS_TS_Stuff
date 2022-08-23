interface IMetrics {
  volumeInCm(a: number): string;
}

interface IImperials {
  volumeInInches(a: number): string;
}

class CubeMetric implements IMetrics {
  public volumeInCm(a: number): string {
    return (a**3) + ' cm³';
  }
}

class CubeImperial implements IImperials {
  public volumeInInches(a: number): string {
      return a**3 + ' inches³';
  }
}

class Adapter extends CubeMetric {

  constructor(private imperial: CubeImperial) {super();}

  public volumeInCm(a: number):string {
    const result = +this.imperial.volumeInInches(a).replace(/inches³/,"") * 2.54 + ' cm³';
    return `${result}`;
  }
}


const imperial = new CubeImperial();
const metric = new CubeMetric()
const adapter = new Adapter(imperial);

console.log(imperial.volumeInInches(10));
console.log(metric.volumeInCm(10));

console.log(adapter.volumeInCm(10));