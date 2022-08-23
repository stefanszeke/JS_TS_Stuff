let a = 2, b = { c: 4 };
let x = a, y = b;
let d = {...b}
x = 5;
y.c = 6;
d.c = 10

console.log(a + b.c);
console.log(a + d.c);
console.log(a)
console.log(b.c)
console.log(y.c)
console.log(d.c)

