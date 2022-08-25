
export {}

// what is namespace?
// namespace is a way to organize code.
// why to use namespace?
// to avoid name collision.

// namespace example:

namespace MyNamespace {
  export class User {
    constructor(public name: string) {}

    introduce() {
      console.log(`Hello, I'm ${this.name} from the namespace class`);
    }
  }
}

let user = new MyNamespace.User('John');

class User {
  constructor(public name: string) {}

  introduce() {
    console.log(`Hello, I'm ${this.name}`);
  }
}

let user2 = new User('John');

user.introduce();
user2.introduce();

