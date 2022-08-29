function square(x: number) {
// log every index(i) with every index(j)
// every combination of i and j


    for(let i = 0; i <= x; i++) {
        for(let j = 0; j <= x; j++) {
            console.log(i,j);
        }
    }
}

// Big O notation: O(n^2) - quadratic time
// number of combinations of i and j is the square of the input number: x^2,


square(10);