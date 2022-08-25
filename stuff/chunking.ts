export {}

function chunkArray(inputArray: any[], chunks: number): any[] {

  let chunkedArray: any[] = [];

  for (let i = 0; i < inputArray.length; i += chunks) {
    // step by chunks
    let clonedArray = [...inputArray]; // recreate the array every instance so we don't splice from the sliced array
    chunkedArray.push(clonedArray.splice(i, chunks)); // push the sliced numbers to the result, slice number defined by chunks
  }

  return chunkedArray;
}

let testArray1: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

console.log(chunkArray(testArray1, 3));
