let prefixConsoleLog = console.log
console.log = function() {
  prefixConsoleLog.apply(console, ['[Console log]:',...arguments])
}

console.log('Hello, world!')