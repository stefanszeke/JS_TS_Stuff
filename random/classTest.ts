class Person {
    private name: string;
    private age: number;
    
    constructor() {}

    set Name (name: string) { this.name = name; }
    get Name ():string {return this.name; }

    set Age (age: number) { 
      if(age < 0) {
        console.log("Age can't be negative");
        return;
      }
      if(age > 120) {
        console.log("Age can't be greater than 120");
        return;
      }

      this.age = age; 
    }

    get Age ():number { return this.age; }

    introduceSelf() { console.log(`Hi, I'm ${this.name} and I'm ${this.age} years old.`); }
}

let p = new Person();
p.Name = "John";
p.Age = 50;
p.introduceSelf();