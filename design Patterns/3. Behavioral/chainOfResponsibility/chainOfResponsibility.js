// Chain Of Responsibility
// The Chain of Responsibility pattern is used to process varied requests, each of which may be dealt with by a different handler.

// The pattern is essentially a linear sequence of handlers. Each of the handlers is a link in the chain. The request is passed from one handler to the next until it is handled.

class Creature {

  constructor(name, attack, defense) {
    this.name = name;
    this.attack = attack;
    this.defense = defense;
  }

  toString() {
    return `${this.name}:  [Atk: ${this.attack}][Def: ${this.defense}]`;
  }
}


class CreatureModifier {
  
    constructor(creature) {
      this.creature = creature;
      this.next = null; // pointer to next handler
    }
  
    add(modifier) { // add a new handler to the chain
      if (this.next) this.next.add(modifier);
      else this.next = modifier;
    }
  
    handle() { // pass the request to the next handler
      if (this.next) this.next.handle();
    }
}

class DoubleAttackModifier extends CreatureModifier {
  
    constructor(creature) {
      super(creature);
    }
  
    handle() {
      console.log(`Doubling ${this.creature.name}'s attack`);
      this.creature.attack *= 2;
      super.handle();
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
          console.log("No bonuses for you!");
        }
}


let goblin = new Creature('Goblin', 1, 1);
console.log(goblin.toString());

let root = new CreatureModifier(goblin);
root.add(new DoubleAttackModifier(goblin));
root.add(new IncreaseDefenseModifier(goblin));
root.add(new DoubleAttackModifier(goblin)); 
root.add(new IncreaseDefenseModifier(goblin)); // no effect
root.add(new NoBonusesModifier(goblin)); // no bonuses for you!
root.add(new DoubleAttackModifier(goblin)); // no bonuses for you!
root.handle();
console.log(goblin.toString());

