// dependency inversion principle
// is a specific form of decoupling software modules

// high-level modules should not depend on low-level modules. Both should depend on abstractions.

let Relationship = Object.freeze({
  parent: "parent",
  child: "child",
  sibling: "sibling"
});

class Person {
  constructor(name) {
    this.name = name;
  }
}

class RelationshipBrowser {
  constructor() {
    if (this.constructor.name === "RelationshipBrowser")
      throw new Error("RelationshipBrowser is abstract!");
  }

  findAllChildrenOf(name) {}
}

// low-level module
class Relationships extends RelationshipBrowser {
  constructor() {
    super();
    this.data = [];
  }

  addParentAndChild(parent, child) {
    this.data.push({
      from: parent,
      type: Relationship.parent,
      to: child
    });
    this.data.push({
      from: child,
      type: Relationship.child,
      to: parent
    });
  }

  findAllChildrenOf(name) {
    return this.data
      .filter(r => r.from.name === name && r.type === Relationship.parent)
      .map(r => r.to)
  }
}


let Father = new Person("Father");
let Mother = new Person("Mother");
let Child1 = new Person("Child1");
let Child2 = new Person("Child2");

let rels = new Relationships();
rels.addParentAndChild(Father, Child1);
rels.addParentAndChild(Mother, Child1);
rels.addParentAndChild(Father, Child2);
rels.addParentAndChild(Mother, Child2);

console.log(rels.data);

// high-level module

class Research {
  // constructor(relationships) {
  //   // find all children of 'Father'
  //   let relations = relationships.data;
  //   for (let rel of relations.filter(
  //     r =>
  //       r.from.name === "Father" &&
  //       r.type === Relationship.parent
  //   )) {
  //     console.log(`Father has a child called ${rel.to.name}`);
  //   }
  // }
  constructor(relationships) {
    for (let p of relationships.findAllChildrenOf("Father")) {
      console.log(`Father has a child called ${p.name}`);
    }
  }
}

new Research(rels);



console.log(rels.findAllChildrenOf("Father"));
