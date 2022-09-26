// chain of responsibility steps:
// 1. create a base class with a pointer to the next handler, 
// 2. create a method to add a new handler to the chain (add)
// 3. create a method to pass the request to the next handler (handle)
// 4. create a method to handle the request (handle), and call the next handler (super.handle())



// 1. create a base class with a pointer to the next handler:
class CreatureModifier {  
  constructor(creature) {
    this.creature = creature;
    this.next = null; // pointer to next handler
  }

  showHandlers() {
    console.log(this.constructor.name);
    if (this.next) this.next.showHandlers();
  }
}

// 2. create a method to add a new handler to the chain (add):
CreatureModifier.prototype.add = function(modifier) { // add a new handler to the chain
  if (this.next) {console.log('next handler =>', modifier.constructor.name); this.next.add(modifier)} // if there is a next handler, add the new handler to it
  else { console.log('no handler', modifier.constructor.name); this.next = modifier }; // if there is no next handler, add the new handler to the current handler
}

// 3. create a method to pass the request to the next handler (handle):
CreatureModifier.prototype.handle = function() { // pass the request to the next handler
  if (this.next) this.next.handle();
}

// 4. create a method to handle the request (handle):
class DoubleAttackModifier extends CreatureModifier {
  constructor(creature) {
    super(creature);
  }

  handle() { // handle the request
    console.log(`Doubling ${this.creature.name}'s attack`);
    this.creature.attack *= 2;
    super.handle(); // pass the request to the next handler
  }
}

class IncreaseDefenseModifier extends CreatureModifier {
  constructor(creature) {
    super(creature);
  }

  handle() {
    if (this.creature.attack <= 2) {
      console.log(`Increasing ${this.creature.name}'s defense`);
      this.creature.defense += 1;
    }
    super.handle();
  }
}

class NoBonusesModifier extends CreatureModifier {
  constructor(creature) {
    super(creature);
  }

  handle() {
    console.log("No bonuses for you!"); // handle the request without passing it to the next handler
  }
}

class Creature {
  constructor(name, attack, defense) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
  }

  toString() {
    return `${this.name} (${this.attack}/${this.defense})`;
  }
}

// usage:
let goblin = new Creature("Goblin", 1, 1);
console.log(goblin.toString());

let root = new CreatureModifier(goblin);
root.add(new DoubleAttackModifier(goblin));
root.add(new IncreaseDefenseModifier(goblin));
// root.add(new NoBonusesModifier(goblin));

root.handle();
console.log(goblin.toString());



