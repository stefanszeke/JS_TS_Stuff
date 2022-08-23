

function mul(x) {
  return function(y) {
    return function(z) {
      return x * y * z
    }
  }
}

console.log(mul(2)(3)(4))

const mul2 = (x) => (y) => (z) => x * y * z

console.log(mul2(2)(3)(4))