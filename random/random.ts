// get random number from zero to 100
function getRandomNumberFromZeroTo100() {
    return Math.floor(Math.random() * 100);
}

// get random number between min and max
function getRandomNumber(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// get random item from array
function getRandomItem(arr: any[]) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// randomize items in array
function randomizeArray(arr: any[]) {
    return arr.sort(() => Math.random() - 0.5);
}

