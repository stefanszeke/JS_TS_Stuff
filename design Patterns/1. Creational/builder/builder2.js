class Person {
  constructor() {
    // personal info
    this.name = "";
    this.age = 0;

    // address info
    this.streetAddress = this.postcode = this.city = '';

    // employment info
    this.companyName = this.position = '';
    this.annualIncome = 0;
  }

  toString() {
    return `${this.name} lives at ${this.streetAddress}, ${this.city}, ${this.postcode}, is ${this.age} years old`
          +` and works at ${this.companyName} as a ${this.position} earning ${this.annualIncome}`;
  }
}

class PersonBuilder {
  constructor(person = new Person()) {
    this.person = person;
  }

  get lives() {
    return new PersonAddressBuilder(this.person);
  }

  get works() {
    return new PersonJobBuilder(this.person);
  }

  get has() {
    return new PersonalInfoBuilder(this.person);
  }

  build() {
    return this.person;
  }
}

class PersonJobBuilder extends PersonBuilder {
  constructor(person) {
    super(person);
  }

  at(companyName) {
    this.person.companyName = companyName;
    return this;
  }

  asA(position) {
    this.person.position = position;
    return this;
  }

  earning(annualIncome) {
    this.person.annualIncome = annualIncome;
    return this;
  }
}

class PersonalInfoBuilder extends PersonBuilder {
  constructor(person) {
    super(person);
  }

  name(name) {
    this.person.name = name;
    return this;
  }

  age(age) {
    this.person.age = age;
    return this;
  }
}

class PersonAddressBuilder extends PersonBuilder {
  constructor(person) {
    super(person);
  }

  at(streetAddress) {
    this.person.streetAddress = streetAddress;
    return this;
  }

  withPostcode(postcode) {
    this.person.postcode = postcode;
    return this;
  }

  in(city) {
    this.person.city = city;
    return this;
  }
}

let pb = new PersonBuilder();
let person = pb
  .has
    .name('John')
    .age(30)
  .lives
    .at('1st Street')
    .in('Borsa')
    .withPostcode('07632')
  .works
    .at('BestCompany')
    .asA('Engineer')
    .earning(5000)
  .build();

console.log(person.toString());
