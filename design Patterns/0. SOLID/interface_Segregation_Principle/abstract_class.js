// make abstract class in javascript

class Printer {
  constructor() {
    if (this.constructor.name === 'Printer') {
      throw new Error('Printer is abstract!');
    }
  }
  print(doc) { console.log('Printing document') }
}

try {
  let m = new Printer(); 
} catch (e) { console.log(e.message); }


