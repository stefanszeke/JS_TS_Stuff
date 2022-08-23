function* myGenerator(nums: number[]) {

  for(let num of nums) {
    yield num;
  }
}

let myGen = myGenerator([1, 2, 3]);
let result1 = myGen.next();
let result2 = myGen.next();
let result3 = myGen.next();
let result4 = myGen.next();

console.log(result3);