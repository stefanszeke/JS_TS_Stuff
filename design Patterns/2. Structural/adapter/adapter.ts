export{}

// adapter pattern example

// what is an adapter pattern?
// adapter pattern is a structural design pattern that allows objects with incompatible interfaces to collaborate.

// when to use adapter pattern?
// when you want to use an existing class, and its interface does not match the one you need.

// example

// we have a class that has a method that returns a string
class Adaptee {
  public specificRequest(): string {
    return 'specific request';
  }
}

// we have an interface that has a method that returns a number
interface Target {
  request(): number;
}

// we have a class that implements the Target interface
class Adapter implements Target {

  constructor(private adaptee: Adaptee) {}

  public request(): number {
    const result = this.adaptee.specificRequest();
    return result.length;
  }
}

// we have a client that uses the Target interface
function clientCode(target: Target) {
  console.log(target.request());
}

// we have an instance of the Adaptee class
const adaptee = new Adaptee();

// we have an instance of the Adapter class
const adapter = new Adapter(adaptee);

// we call the client code with the Adapter instance
clientCode(adapter);

