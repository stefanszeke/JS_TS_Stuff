// The Handler Interface that the Successors should implement
interface IHandler {
  handle(payload: number): number
}

class Successor1 implements IHandler {
  // A Concrete Handler
  handle(payload: number) {
      console.log(`Successor1 payload = ${payload}`)
      const test = Math.floor(Math.random() * 2) + 1
      if (test === 1) {
          payload += 1
          payload = new Successor1().handle(payload)
      } else {
          payload -= 1
          payload = new Successor2().handle(payload)
      }
      return payload
  }
}
class Successor2 implements IHandler {
  // A Concrete Handler
  handle(payload: number) {
      console.log(`Successor2 payload = ${payload}`)
      const test = Math.floor(Math.random() * 3) + 1
      if (test === 1) {
          payload = payload * 2
          payload = new Successor1().handle(payload)
      } else if (test === 2) {
          payload = payload / 2
          payload = new Successor2().handle(payload)
      } // if test = 3 then assign no further successors
      return payload
  }
}

class Chain {
  // A chain with a default first successor
  start(payload: number) {
      // Setting the first successor that will modify the payload
      return new Successor1().handle(payload)
  }
}

// The Client
const CHAIN = new Chain()

const OUT = CHAIN.start(1)
console.log(`Finished result = ${OUT}`)