// change the console.log function to add a prefix to the output

let prefixConsoleLog = console.log
console.log = function() {
  prefixConsoleLog.apply(console, ['[Console log]:',...arguments])
}

console.log('Hello, world!')

function appLog() {
  var args = Array.prototype.slice.call(arguments);
  args.unshift('[App log]:');
  console.log.apply(console, args);
}

appLog("Some error message"); 