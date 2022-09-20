

// Single Responsibility Principle is  a principle that states that every class should have only one responsibility.
// why is this important?
// if a class has more than one responsibility, it becomes more difficult to maintain and extend
// how do we know if a class has more than one responsibility?
// if we can think of more than one reason for a class to change, then it has more than one responsibility
// how do we fix this?
// we split the class into multiple classes, each with a single responsibility
// what is the benefit of this?
// we can now extend one class without affecting the others
// we can now reuse one class without affecting the others

const fs = require('fs');


class Journal {

  count = 0

  constructor() {
    this.entries = {};
  }

  addEntry(text) {
    let c = ++this.count;
    let entry = `${c}: ${text}`;
    this.entries[c] = entry;
    return c;
  }

  removeEntry(index) {
    delete this.entries[index];
  }

  toString() {
    return Object.values(this.entries).join('\n');
  }

  // save(filename) {
  //   fs.writeFileSync(filename, this.toString());
  // }
  
}


let myJournal = new Journal();
myJournal.addEntry('I went for a run.');
myJournal.addEntry('I Washed my clothes.');
myJournal.addEntry('I Learned some code.');

console.log(myJournal.toString());

class PersistenceManager {
  static saveToFile(journal, filename) {
    fs.writeFileSync(filename, journal.toString());
  }
}

PersistenceManager.saveToFile(myJournal, 'myJournal.txt');

// god object
// a god object is an object that does too much
// why is this bad?
// it makes the object difficult to maintain and extend

