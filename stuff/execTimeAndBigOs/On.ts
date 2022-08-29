
function linearFunction(array: number[]) {
   for (let n in array) {
    console.log(10000*10000) // takes the same time to calculate every time, (constant time Big 0(1) by itself, not the worst case)
   }
}

// Big O notation: O(n) - linear time 

// scales with the size of the input linearly
let myArray: number[] = [1,2,3,4,100,20,300,400,5000];

console.log(linearFunction(myArray));