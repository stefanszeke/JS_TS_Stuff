interface IPerson {
    privileges: string[];
    getName(): string;
}

export class Person implements IPerson {
    privileges: string[] = [];

    constructor(private name: string) {}

    getName(): string {
        return this.name;
    }
}

export class Guest extends Person {
  privileges:string[] =  ['read'];

  constructor(name: string) { super(name) }
}

export class User extends Person {
  privileges:string[] = ['read', 'write'];

  constructor(name: string) { super(name) }
}

export class Admin extends Person{
  privileges:string[] =  ['read', 'write', 'delete'];

  constructor(name: string) { super(name) }
}

export class PersonFactory1 {
  static create(name: string, type: 'guest' | 'user' | 'admin'): Person {
    switch (type) {
      case 'guest':
        return new Guest(name);
      case 'user':
        return new User(name);
      case 'admin':
        return new Admin(name);
    }
  }
}

export class PersonFactory2 {
  static create(name: string, type: 'guest' | 'user' | 'admin'): Person {
    return new (type === 'guest' ? Guest : type === 'user' ? User : Admin)(name);
  }
}

export class PersonFactory3 {
  static create(name: string, type: 'guest' | 'user' | 'admin'): Person {
    if(type === 'guest') return new Guest(name) 
    if(type === 'user')  return new User(name) 
    if(type === 'admin') return new Admin(name) 
    else throw new Error('Invalid type') 
  }
}

