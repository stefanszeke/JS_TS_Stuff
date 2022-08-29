function cube(x: number) {
  // log every index(i) with every index(j) with every index(k)
  // every combination of i, j and k

    for(let i = 0; i <= x; i++) {
        for(let j = 0; j <= x; j++) {
            for(let k = 0; k <= x; k++) {
                console.log(i,j,k);
            }
        }
    }
}

// Big O notation: O(n^3) - cubic time
// number of combinations of i, j and k is the cube of the input number: x^3,

cube(10);