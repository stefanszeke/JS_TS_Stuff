// what is hoisting?
// hoisting is a javascript mechanism where variables and function declarations are moved to the top of their scope before code execution.

var hoisted = 'I am hoisted';

try {
  console.log(notHoisted1);
} catch(e) { console.log(e) };
let notHoisted1 = 'I am not hoisted';

try {
  console.log(notHoisted2);
} catch(e) { console.log(e) };
const notHoisted2 = [1,2,3];

try {
  notHoisted2 = 'sdasdasd';
} catch(e) { console.log(e) };

notHoisted2.push(5)

try {
  console.log(notHoisted1);
  console.log(notHoisted2);
  console.log(hoisted);
} catch(e) { console.log(e) };
