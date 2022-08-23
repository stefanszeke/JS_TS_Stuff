// change the console.log function to add a prefix to the output

let prefixConsoleLog = console.log
console.log = function() {
  prefixConsoleLog.apply(console, ['[Console log]:',...arguments])
}

console.log('Hello, world!')

