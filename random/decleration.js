var z = 1, y = z = typeof y;
console.log(y);


// var k = 1, j = k = 5;
// console.log(j)

// associativity rule is right to left
// so the above code is equivalent to
var k = 1;
console.log(j)
k = 5;
console.log(j)
var j = k;
console.log(j)

var a = 1
var b = 2
var c = a = b = 3
console.log(a)
console.log(b)
console.log(c)

// var a
// var b
// var c
// a = 1
// b = 2
// b = 3
// a = b
// c = a

